import Config from "../config";
import Scene from "./Scene";
import List from "../ui/List";
import DataMgr from "../mgr/DataMgr";
import BikeSprite from "../item/BikeSprite";

export default class BikeScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.onClick(this.ui.drawButton, this.onClickDrawButton.bind(this));
        this.onClick(this.ui.selectBikeButton, this.onClickSelectedBikeButton.bind(this));
        this.list = new List({
            root: this.ui.list,
            initItemFunc: this.initItem.bind(this),
            updateItemFunc: this.updateItem.bind(this),
            count: Config.bikeList.length,
        });
    }

    onShow() {
        this.onClickItem({index: 0});
    }

    initItem(item) {
        item.itemRoot = item.children[0];
        item.selectedImage = item.itemRoot.children[0];
        item.lostMaskImage = item.itemRoot.children[1];
        item.fightMaskImage = item.itemRoot.children[2];
        item.levelText = item.itemRoot.children[3];
        item.bikeSprite = new BikeSprite(item.itemRoot, 2);
        item.bikeSprite.setPosition(item.itemRoot.mywidth / 2, item.itemRoot.myheight / 2 + 20);
        this.onClick(item, this.onClickItem.bind(this));
    }

    updateItem(item, index) {
        item.index = index;
        let config = Config.bikeList[index];
        item.bikeSprite.setBikeID(config.id);
        if (this.selectedIndex === index) {
            item.bikeSprite.play();
            item.selectedImage.visible = true;
        } else {
            item.bikeSprite.stop();
            item.selectedImage.visible = false;
        }
        item.lostMaskImage.visible = !this.hasOwnedBike(config.id);
        item.fightMaskImage.visible = DataMgr.get(DataMgr.selectedBike, 0) === config.id;
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[config.id];
        item.levelText.text = level !== undefined ? (level + 1) : "";
    }

    onClickReturnButton() {
        App.hideScene("BikeScene");
        App.showScene("MainScene");
    }

    onClickDrawButton() {
        App.hideScene("BikeScene");
        App.showScene("DrawScene");
    }

    onClickItem(item) {
        this.selectedIndex = item.index;
        this.list.refresh();
        let config = Config.bikeList[item.index];
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[config.id];
        let isHighestLevel = (config.coinPercent || Config.bike.coinPercent)[level + 1] === undefined;
        let dsc = config.dsc;
        if (this.hasOwnedBike(config.id)) {
            let get = (config, name, key, level) => {
                let list = config[key] || Config.bike[key];
                let curValue = list[level];
                let nextValue = list[level + 1];
                return `${name} ${Math.floor(curValue * 100)}%` + (nextValue !== undefined ? ` -> ${Math.floor(nextValue * 100)}%` : "");
            };
            dsc += "\n" + `LV ${level + 1} ${isHighestLevel ? "Highest Level" : `-> ${level + 1}`}`
                + "\n" + get(config, "Gold Coin", "coinPercent", level)
                + "\n" + get(config, "Distance", "distancePercent", level)
                + "\n" + get(config, "Score", "scorePercent", level);
        } else {
            let get = (config, name, key, level) => {
                let list = config[key] || Config.bike[key];
                let curValue = list[level];
                return `${name} ${Math.floor(curValue * 100)}%`;
            };
            level = 0;
            dsc += "\n" + `LV ${level + 1}`
                + "\n" + get(config, "Gold Coin", "coinPercent", level)
                + "\n" + get(config, "Distance", "distancePercent", level)
                + "\n" + get(config, "Score", "scorePercent", level);
        }
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
}

BikeScene.sceneFilePath = "myLaya/laya/pages/View/BikeScene.scene";
BikeScene.resPathList = BikeSprite.resPathList;
