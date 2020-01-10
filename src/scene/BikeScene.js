import Config from "../config";
import Scene from "./Scene";
import List from "../ui/List";
import DataMgr from "../mgr/DataMgr";
import BikeSprite from "../item/BikeSprite";
import GameUtils from "../mgr/GameUtils";

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
            count: Config.upgradeList.length,
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
        Config.upgradeList.forEach((upgrade, i) => {
            item.ui[`itemPanel${index}`].visible = index === i;
        });
        item.ui.selectedIcon.visible = index === this.selectedUpgradeIndex;
        const cur = 0.5;
        const max = 5;
        item.ui.upgradeProgressLabel.text = App.getText("UpgradeItemDsc", {cur, max});
        for (let i = 1; i <= 12; i++) {
            const step = i / 24 * max;
            this.ui[i].visible = cur >= step;
        }
        for (let i = 21; i <= 32; i++) {
            const step = (i - 20 + 12) / 24;
            this.ui[i].visible = cur >= step;
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
    }

    onClickUpgradeButton() {
    }
}

BikeScene.sceneFilePath = "myLaya/laya/pages/View/BikeScene.scene.json";
BikeScene.resPathList = BikeSprite.resPathList;
