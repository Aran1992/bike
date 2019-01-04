import Config from "../config";
import Scene from "./Scene";
import List from "../ui/List";
import DataMgr from "../mgr/DataMgr";
import Utils from "../mgr/Utils";
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
        item.fightMaskImage = item.itemRoot.children[0];
        item.selectedImage = item.itemRoot.children[1];
        item.lostMaskImage = item.itemRoot.children[2];
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
        this.ui.bikeDscText.text = config.dsc;
        let hasOwned = this.hasOwnedBike(config.id);
        this.ui.selectBikeButton.visible = hasOwned && DataMgr.get(DataMgr.selectedBike, 0) !== config.id;
        this.ui.unlockBikeImage.visible = !hasOwned;
    }

    hasOwnedBike(id) {
        return DataMgr.get(DataMgr.ownedBikeList, []).indexOf(id) !== -1;
    }

    onClickSelectedBikeButton() {
        DataMgr.set(DataMgr.selectedBike, Config.bikeList[this.selectedIndex].id);
        this.list.refresh();
        this.onClickItem({index: this.selectedIndex});
    }
}

BikeScene.sceneFilePath = "myLaya/laya/pages/View/BikeScene.scene";
BikeScene.resPathList = BikeSprite.resPathList;
