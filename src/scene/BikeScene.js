import Config from "../config";
import Scene from "./Scene";
import List from "../ui/List";
import {AnimatedSprite, resources, Sprite} from "../libs/pixi-wrapper";
import DataMgr from "../mgr/DataMgr";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";

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
        let frames = GameUtils.getFrames(Config.bikeAtlasPath);
        item.bikeSprite = new AnimatedSprite(frames);
        item.itemRoot.addChildAt(item.bikeSprite, 2);
        item.bikeSprite.anchor.set(0.5, 0.5);
        item.bikeSprite.position.set(item.itemRoot.mywidth / 2, item.itemRoot.myheight / 2 + 20);
        item.bikeDetailSprite = new Sprite();
        item.bikeSprite.addChild(item.bikeDetailSprite);
        this.onClick(item, this.onClickItem.bind(this));
    }

    updateItem(item, index) {
        item.index = index;
        let config = Config.bikeList[index];
        let sprite = item.bikeDetailSprite;
        if (config.imagePath) {
            sprite.texture = resources[config.imagePath].texture;
            sprite.anchor.set(...config.anchor);
            sprite.position.set(...config.scale);
            sprite.scale.set(...config.scale);
        } else {
            sprite.texture = undefined;
        }
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
BikeScene.resPathList = [Config.bikeAtlasPath].concat(Utils.values(Config.bikeList).map(obj => obj.imagePath));
