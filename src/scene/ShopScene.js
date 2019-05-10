import List from "../ui/List";
import Scene from "./Scene";
import {resources} from "../libs/pixi-wrapper";
import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import Radio from "../ui/Radio";

export default class ShopScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.selectedMapID = DataMgr.get(DataMgr.selectedEndlessScene, 0);
        this.panelList = [
            {
                panel: this.ui.presentPanel,
                init: this.initPresentPanel.bind(this),
                show: this.showPresentPanel.bind(this),
            },
            {
                panel: this.ui.moneyPanel,
                init: this.initMoneyPanel.bind(this),
                show: this.showMoneyPanel.bind(this),
            },
            {
                panel: this.ui.mapPanel,
                init: this.initMapPanel.bind(this),
                show: this.showMapPanel.bind(this),
            },
        ];
        this.panelList.forEach(panelMgr => panelMgr.panel.visible = false);
        this.radio = new Radio({
            root: this.ui.tab,
            initItemFunc: this.initRadioButton.bind(this),
            clickButtonFunc: this.onClickRadio.bind(this),
            infoList: ["Present", "Money", "Map"],
            buttonDistance: 100
        });
    }

    onShow() {
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
        this.onClickRadio(this.radio.selectedIndex);
    }

    onClickReturnButton() {
        App.hideScene("ShopScene");
        App.showScene("MainScene");
    }

    initRadioButton(button, info) {
        button.ui.label.text = App.getText(info);
    }

    onClickRadio(selectedIndex, lastIndex) {
        if (lastIndex !== undefined) {
            this.panelList[lastIndex].panel.visible = false;
        }
        let panelMgr = this.panelList[selectedIndex];
        panelMgr.panel.visible = true;
        if (!panelMgr.hasInit) {
            panelMgr.init();
            panelMgr.hasInit = true;
        }
        panelMgr.show();
    }

    initPresentPanel() {
        this.presentList = new List({
            root: this.ui.presentList,
            initItemFunc: this.initPresentItem.bind(this),
            updateItemFunc: this.updatePresentItem.bind(this),
            count: Config.presentList.length,
        });
    }

    initPresentItem(item) {
        item.root = item.children[0];
        item.icon = item.root.children[0];
        item.dsc = item.root.children[1];
        item.buyButton = item.root.children[2];
        item.buyDsc = item.buyButton.children[1];
        item.diableButton = item.root.children[3];
        this.onClick(item.buyButton, this.onClickBuyButton.bind(this));
    }

    updatePresentItem(item, index) {
        let config = Config.presentList[index];
        item.icon.children[0].texture = resources[config.imagePath].texture;
        item.dsc.text = App.getText(config.dsc, {
            money: config.costMoney,
            diamond: config.getDiamond,
            coin: config.getCoin,
        });
        item.buyDsc.text = config.costMoney;
        item.buyButton.visible = false;
        item.diableButton.visible = false;
        if (DataMgr.get(DataMgr.hasBuyPresentIDList, []).indexOf(config.id) !== -1) {
            item.diableButton.visible = true;
        } else {
            item.buyButton.visible = true;
            item.buyButton.id = config.id;
        }
    }

    showPresentPanel() {
        this.presentList.refresh();
    }

    onClickBuyButton(button) {
        let list = DataMgr.get(DataMgr.hasBuyPresentIDList, []);
        list.push(button.id);
        DataMgr.set(DataMgr.hasBuyPresentIDList, list);
        this.presentList.refresh();
        switch (button.id) {
            case 1: {
                DataMgr.set(DataMgr.unlockAllBike, true);
                let ownedBikeList = DataMgr.get(DataMgr.ownedBikeList, []);
                let bikeLevelMap = DataMgr.get(DataMgr.bikeLevelMap, {});
                Config.bikeList.forEach(config => {
                    if (ownedBikeList.indexOf(config.id) === -1) {
                        ownedBikeList.push(config.id);
                        bikeLevelMap[config.id] = 0;
                    } else {
                        bikeLevelMap[config.id]++;
                    }
                });
                DataMgr.set(DataMgr.ownedBikeList, ownedBikeList);
                DataMgr.set(DataMgr.bikeLevelMap, bikeLevelMap);
                break;
            }
            case 2: {
                DataMgr.set(DataMgr.unlockAllEndlessScene, true);
                break;
            }
        }

        let config = Config.presentList.find(item => item.id === button.id);

        if (config.getDiamond) {
            let diamond = DataMgr.get(DataMgr.diamond, 0);
            diamond += config.getDiamond;
            DataMgr.set(DataMgr.diamond, diamond);
            this.ui.diamondText.text = diamond;
        }

        if (config.getCoin) {
            let coin = DataMgr.get(DataMgr.coin, 0);
            coin += config.getCoin;
            DataMgr.set(DataMgr.coin, coin);
            this.ui.coinText.text = coin;
        }
    }

    initMoneyPanel() {
        this.moneyList = new List({
            root: this.ui.moneyList,
            initItemFunc: this.initMoneyItem.bind(this),
            updateItemFunc: this.updateMoneyItem.bind(this),
            count: Config.moneyList.length,
        });
    }

    initMoneyItem(item) {
        item.root = item.children[0];
        item.icon = item.root.children[0];
        item.dsc = item.root.children[1];
        item.buyDiamondButton = item.root.children[2];
        item.buyDiamondDsc = item.buyDiamondButton.children[1];
        item.buyCoinButton = item.root.children[3];
        item.buyCoinDsc = item.buyCoinButton.children[2];
        this.onClick(item.buyDiamondButton, this.onClickBuyDiamondButton.bind(this));
        this.onClick(item.buyCoinButton, this.onClickBuyCoinButton.bind(this));
    }

    updateMoneyItem(item, index) {
        let config = Config.moneyList[index];
        item.icon.children[0].texture = resources[config.imagePath].texture;
        item.buyDiamondButton.visible = false;
        item.buyCoinButton.visible = false;
        if (config.getCoin) {
            item.buyCoinButton.visible = true;
            item.buyCoinDsc.text = config.costDiamond;
            item.dsc.text = `${config.getCoin} ${App.getText("Coin")}`;
            item.buyCoinButton.getCoin = config.getCoin;
            item.buyCoinButton.costDiamond = config.costDiamond;
        } else {
            item.buyDiamondButton.visible = true;
            item.buyDiamondDsc.text = config.costMoney;
            item.dsc.text = `${config.getDiamond} ${App.getText("Diamond")}`;
            item.buyDiamondButton.getDiamond = config.getDiamond;
            item.buyDiamondButton.costMoney = config.costMoney;
        }
    }

    showMoneyPanel() {
        this.moneyList.refresh();
    }

    onClickBuyDiamondButton(button) {
        let diamond = DataMgr.get(DataMgr.diamond, 0) + button.getDiamond;
        DataMgr.set(DataMgr.diamond, diamond);
        this.ui.diamondText.text = diamond;
    }

    onClickBuyCoinButton(button) {
        let diamond = DataMgr.get(DataMgr.diamond, 0);
        if (diamond >= button.costDiamond) {
            diamond -= button.costDiamond;
            DataMgr.set(DataMgr.diamond, diamond);
            let coin = DataMgr.get(DataMgr.coin, 0) + button.getCoin;
            DataMgr.set(DataMgr.coin, coin);
            this.ui.diamondText.text = diamond;
            this.ui.coinText.text = coin;
        } else {
            App.showNotice(App.getText("DiamondIsNotEnough"));
            // todo 后面在修复多条提示重叠的问题
        }
    }

    initMapPanel() {
        this.mapList = new List({
            root: this.ui.mapList,
            initItemFunc: this.initMapItem.bind(this),
            updateItemFunc: this.updateMapItem.bind(this),
            count: Config.endlessMode.sceneList.length,
        });
    }

    showMapPanel() {
        this.mapList.refresh();
    }

    initMapItem(item) {
        this.onClick(item, this.onClickMapItem.bind(this), true);
        item.root = item.children[0];
        item.backgroundImage = item.root.children[1].children[0];
        item.commonImage = item.root.children[2];
        item.unlockButton = item.root.children[3];
        this.onClick(item.unlockButton, this.onClickUnlockButton.bind(this));
        item.unlockCostText = item.unlockButton.children[2];
        item.selectedImage = item.root.children[4];
        item.lockedImage = item.root.children[5];
        item.unlockCondition = item.root.children[6];
        item.unlockConditionText = item.unlockCondition.children[0];
        item.mapDescription = item.root.children[7];
        item.mapDescriptionText = item.mapDescription.children[0];
    }

    updateMapItem(item, index) {
        let config = Config.endlessMode.sceneList[index];
        let path = config.texture.shopCover;
        item.backgroundImage.texture = resources[path].texture;
        item.mapDescriptionText.text = config.name ? App.getText(config.name) : (App.getText("Map") + config.id);
        if (DataMgr.isEndlessSceneLocked(config.id)) {
            item.commonImage.visible = false;
            item.selectedImage.visible = false;
            item.lockedImage.visible = true;
            item.unlockButton.visible = true;
            item.unlockCostText.text = config.unlockCostDiamond;
            item.unlockCondition.visible = true;
            item.unlockConditionText.text = App.getText("TotalDistanceReach", {distance: config.unlockDistance});
            item.interactive = false;
            item.unlockButton.id = config.id;
        } else {
            item.commonImage.visible = config.id !== this.selectedMapID;
            item.selectedImage.visible = config.id === this.selectedMapID;
            item.lockedImage.visible = false;
            item.unlockButton.visible = false;
            item.unlockCondition.visible = false;
            item.interactive = true;
            item.id = config.id;
        }
    }

    onClickMapItem(item) {
        this.selectedMapID = item.id;
        DataMgr.set(DataMgr.selectedEndlessScene, this.selectedMapID);
        this.mapList.refresh();
    }

    onClickUnlockButton(button) {
        let config = Config.endlessMode.sceneList.find(item => item.id === button.id);
        let diamond = DataMgr.get(DataMgr.diamond, 0);
        if (diamond >= config.unlockCostDiamond) {
            diamond -= config.unlockCostDiamond;
            DataMgr.set(DataMgr.diamond, diamond);
            this.ui.diamondText.text = diamond;
            let list = DataMgr.get(DataMgr.unlockEndlessSceneIDList, []);
            list.push(config.id);
            DataMgr.set(DataMgr.unlockEndlessSceneIDList, list);
            this.mapList.refresh();
        } else {
            App.showNotice(App.getText("DiamondIsNotEnough"));
        }
    }
}

ShopScene.sceneFilePath = "myLaya/laya/pages/View/ShopScene.scene.json";
ShopScene.resPathList = Config.endlessMode.sceneList.map(scene => scene.texture.shopCover)
    .concat(Config.moneyList.map(item => item.imagePath))
    .concat(Config.presentList.map(item => item.imagePath));
