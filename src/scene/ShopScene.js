import List from "../ui/List";
import Scene from "./Scene";
import {resources} from "../libs/pixi-wrapper";
import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import Radio from "../ui/Radio";

export default class ShopScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.selectedMapIndex = DataMgr.get(DataMgr.selectedEndlessScene, 0);
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
    }

    onClickReturnButton() {
        App.hideScene("ShopScene");
        App.showScene("MainScene");
    }

    initRadioButton(button, info) {
        button.children[2].text = info;
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
        item.dsc.text = config.dsc;
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
                break;
            }
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
            item.dsc.text = `${config.getCoin} gold coin`;
            item.buyCoinButton.getCoin = config.getCoin;
            item.buyCoinButton.costDiamond = config.costDiamond;
        } else {
            item.buyDiamondButton.visible = true;
            item.buyDiamondDsc.text = config.costMoney;
            item.dsc.text = `${config.getDiamond} diamond`;
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
            App.showNotice("Diamond is not enough!");
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
        item.backgroundImage = item.children[0].children[0];
        item.commonImage = item.children[0].children[1];
        item.selectedImage = item.children[0].children[3];
    }

    updateMapItem(item, index) {
        item.index = index;
        let path = Config.endlessMode.sceneList[index].texture.shopCover;
        item.backgroundImage.texture = resources[path].texture;
        item.commonImage.visible = index !== this.selectedMapIndex;
        item.selectedImage.visible = index === this.selectedMapIndex;
    }

    onClickMapItem(item) {
        this.selectedMapIndex = item.index;
        DataMgr.set(DataMgr.selectedEndlessScene, this.selectedMapIndex);
        this.mapList.refresh();
    }
}

ShopScene.sceneFilePath = "myLaya/laya/pages/View/ShopScene.scene";
ShopScene.resPathList = Config.endlessMode.sceneList.map(scene => scene.texture.shopCover)
    .concat(Config.moneyList.map(item => item.imagePath))
    .concat(Config.presentList.map(item => item.imagePath));
