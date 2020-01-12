import Config from "../config";
import Scene from "./Scene";
import List from "../ui/List";
import DataMgr from "../mgr/DataMgr";
import BikeSprite from "../item/BikeSprite";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";

export default class BikeScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.onClick(this.ui.drawButton, this.onClickDrawButton.bind(this));
        this.onClick(this.ui.selectBikeButton, this.onClickSelectedBikeButton.bind(this));
        this.onClick(this.ui.upgradePanelButton, this.onClickUpgradePanelButton.bind(this));
        this.onClick(this.ui.upgradeButton, this.onClickUpgradeButton.bind(this));
        this.list = new List({
            root: this.ui.list,
            initItemFunc: this.initItem.bind(this),
            updateItemFunc: this.updateItem.bind(this),
            count: Config.bikeList.length,
        });
        this.upgradeList = new List({
            root: this.ui.upgradeList,
            updateItemFunc: this.updateUpgradeItem.bind(this),
            count: Config.upgradeBike.items.length,
            isStatic: true,
        });
    }

    onShow() {
        this.onClickItem({index: 0});
        let lock = DataMgr.get(DataMgr.unlockSystems, []).indexOf("drawButton") === -1;
        GameUtils.greySprite(this.ui.drawButton, lock);
        GameUtils.findChildByName(this.ui.drawButton, "lockedImage").visible = lock;
        this.ui.upgradePanel.visible = false;
        this.ui.list.visible = true;
    }

    initItem(item) {
        item.bikeSprite = new BikeSprite(item.ui.bikePanel, 2);
        item.bikeSprite.setPosition(item.ui.bikePanel.mywidth / 2, item.ui.bikePanel.myheight / 2 + 20);
        this.onClick(item, this.onClickItem.bind(this));
    }

    updateItem(item, index) {
        item.index = index;
        let config = Config.bikeList[index];
        let lock = !this.hasOwnedBike(config.id);
        item.bikeSprite.setBikeID(config.id);
        item.bikeSprite.setGray(lock);
        if (this.selectedIndex === index) {
            item.bikeSprite.play();
            item.ui.selectedImage.visible = true;
        } else {
            item.bikeSprite.stop();
            item.ui.selectedImage.visible = false;
        }
        item.ui.lostMaskImage.visible = lock;
        item.ui.lockedImage.visible = lock;
        item.ui.fightMaskImage.visible = DataMgr.get(DataMgr.selectedBike, 0) === config.id;
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[config.id];
        item.ui.levelText.text = level !== undefined ? `${App.getText("LV")}${level + 1}` : "";
    }

    updateUpgradeItem(item, index) {
        Config.upgradeBike.items.forEach((upgrade, i) => {
            item.ui[`itemPanel${i}`].visible = index === i;
        });
        item.ui.selectedIcon.visible = false;
        if (this.selectedIndex !== undefined) {
            const [cur, max] = DataMgr.getBikeUpgradeItem(Config.bikeList[this.selectedIndex].id, index);
            item.ui.upgradeProgressLabel.text = App.getText("UpgradeItemDsc", {cur, max});
            for (let i = 1; i <= 12; i++) {
                const step = i / 24 * max;
                item.ui[i].visible = cur >= step;
            }
            for (let i = 21; i <= 32; i++) {
                const step = (i - 20 + 12) / 24;
                item.ui[i].visible = cur >= step;
            }
        }
    }

    onClickReturnButton() {
        App.hideScene("BikeScene");
        App.showScene("MainScene");
    }

    onClickDrawButton() {
        if (DataMgr.get(DataMgr.unlockSystems, []).indexOf("drawButton") === -1) {
            return App.showTip(GameUtils.getLockNotice("drawButton"), undefined, undefined, true);
        }
        App.hideScene("BikeScene");
        App.showScene("DrawScene");
    }

    onClickItem(item) {
        this.selectedIndex = item.index;
        this.list.refresh();
        let config = Config.bikeList[item.index];
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[config.id];
        let isHighestLevel = (config.coinPercent || Config.bike.coinPercent)[level + 1] === undefined;
        let dsc = GameUtils.getBikeDsc(config);
        let coin, distance, score, exp;
        if (this.hasOwnedBike(config.id)) {
            let get = (config, key, level) => {
                let list = config[key] || Config.bike[key];
                let curValue = list[level];
                let nextValue = list[level + 1];
                return `${Math.floor(curValue * 100)}%` + (nextValue !== undefined ? ` -> ${Math.floor(nextValue * 100)}%` : "");
            };
            dsc += "\n" + App.getText("LevelDsc", {level: `${level + 1} ${isHighestLevel ? App.getText("Highest Level") : `-> ${level + 2}`}`});
            coin = get(config, "coinPercent", level);
            distance = get(config, "distancePercent", level);
            score = get(config, "scorePercent", level);
            exp = get(config, "expPercent", level);
        } else {
            let get = (config, key, level) => {
                let list = config[key] || Config.bike[key];
                let curValue = list[level];
                return `${Math.floor(curValue * 100)}%`;
            };
            level = 0;
            dsc += "\n" + App.getText("LevelDsc", {level: level + 1});
            coin = get(config, "coinPercent", level);
            distance = get(config, "distancePercent", level);
            score = get(config, "scorePercent", level);
            exp = get(config, "expPercent", level);
        }
        dsc += "\n" + App.getText("BonusDsc", {coin, distance, score, exp});
        this.ui.bikeDscText.text = dsc;

        let hasOwned = this.hasOwnedBike(config.id);
        this.ui.selectBikeButton.visible = hasOwned && DataMgr.get(DataMgr.selectedBike, 0) !== config.id;
        this.ui.unlockBikeImage.visible = !hasOwned;
    }

    hasOwnedBike(id) {
        return DataMgr.get(DataMgr.unlockAllBike, false) || DataMgr.get(DataMgr.ownedBikeList, []).indexOf(id) !== -1;
    }

    onClickSelectedBikeButton() {
        DataMgr.set(DataMgr.selectedBike, Config.bikeList[this.selectedIndex].id);
        this.list.refresh();
        this.onClickItem({index: this.selectedIndex});
    }

    onClickUpgradePanelButton() {
        this.ui.upgradePanel.visible = !this.ui.upgradePanel.visible;
        this.ui.list.visible = !this.ui.list.visible;
        if (this.ui.upgradePanel.visible) {
            this.refreshUpgradePanel();
        }
    }

    onClickUpgradeButton() {
        const owned = DataMgr.get(DataMgr.coin, 0);
        const cost = Config.upgradeBike.costCoin;
        if (owned < cost) {
            return App.showNotice(App.getText("Gold Coin is not enough!"));
        }
        this.upgradeBike();
    }

    refreshUpgradePanel() {
        const upgradeTimes = DataMgr.getBikeUpgradeTimes(Config.bikeList[this.selectedIndex].id);
        const maxTimes = Utils.getLast(Config.upgradeBike.playerLevelLimitTimes);
        if (upgradeTimes >= maxTimes) {
            this.ui.lvLimitPanel.visible = true;
            this.ui.lvLimitLabel.text = App.getText("Highest Level");
            this.ui.upgradeButton.visible = false;
            this.ui.upgradeCostPanel.visible = false;
        } else if (upgradeTimes >= (Config.upgradeBike.playerLevelLimitTimes[DataMgr.getPlayerLevel().level - 1] || maxTimes)) {
            this.ui.lvLimitPanel.visible = true;
            this.ui.lvLimitLabel.text = App.getText("玩家${level}级才能继续升级", {level: DataMgr.getPlayerLevel().level});
            this.ui.upgradeButton.visible = false;
            this.ui.upgradeCostPanel.visible = false;
        } else {
            this.ui.upgradeButton.visible = true;
            this.ui.upgradeCostPanel.visible = true;
            this.ui.lvLimitPanel.visible = false;
        }

        this.ui.upgradeCostLabel.text = Config.upgradeBike.costCoin;
        this.ui.upgradeTimesLabel.text = App.getText("已升级${times}次", {times: upgradeTimes});

        this.upgradeList.refresh();
    }

    upgradeBike() {
        App.showMask(this.onUpgradeEnded);
        DataMgr.add(DataMgr.coin, -Config.upgradeBike.costCoin);
        this.upgradeItemIndex = DataMgr.upgradeBikeItem(Config.bikeList[this.selectedIndex].id);
        this.animationIndex = 0;
        this.animationID = requestAnimationFrame(this.onAnimation.bind(this));
    }

    onAnimation() {
        this.animationIndex++;
        if (this.animationIndex >= Config.upgradeBike.animationSelectedFrame + Config.upgradeBike.animationSelectingFrame) {
            this.onUpgradeEnded();
        } else if (this.animationIndex >= Config.upgradeBike.animationSelectingFrame) {
            this.animationID = requestAnimationFrame(this.onAnimation.bind(this));
            this.upgradeList.updateItems((item, index) => {
                if (index === this.upgradeItemIndex) {
                    item.ui.selectedIcon.visible = !item.ui.selectedIcon.visible;
                }
            });
        } else {
            let selectedIndex = Math.floor(Utils.randomInRange(0, Config.upgradeBike.items.length - 1));
            if (selectedIndex >= this.lastSelectedUpgradeItemIndex) {
                selectedIndex++;
            }
            this.lastSelectedUpgradeItemIndex = selectedIndex;
            this.upgradeList.updateItems((item, index) => {
                item.ui.selectedIcon.visible = index === selectedIndex;
            });
            this.animationID = requestAnimationFrame(this.onAnimation.bind(this));
        }
    }

    onUpgradeEnded() {
        this.upgradeList.updateItems((item, index) => {
            if (index === this.upgradeItemIndex) {
                this.updateUpgradeItem(item, index);
                item.ui.selectedIcon.visible = true;
            }
        });
        cancelAnimationFrame(this.animationID);
        App.hideMask();
    }
}

BikeScene.sceneFilePath = "myLaya/laya/pages/View/BikeScene.scene.json";
BikeScene.resPathList = BikeSprite.resPathList;
