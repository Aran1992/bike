import List from "../ui/List";
import Scene from "./Scene";
import {resources} from "../libs/pixi-wrapper";
import Config from "../config";
import DataMgr from "../mgr/DataMgr";

export default class ShopScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.selectedIndex = DataMgr.get(DataMgr.selectedEndlessScene, 0);
        this.list = new List({
            root: this.ui.list,
            initItemFunc: this.initItem.bind(this),
            updateItemFunc: this.updateItem.bind(this),
            count: 5,
        });
    }

    onShow() {
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
    }

    initItem(item) {
        this.onClick(item, this.onClickItem.bind(this));
        item.backgroundImage = item.children[0].children[0];
        item.commonImage = item.children[0].children[1];
        item.selectedImage = item.children[0].children[3];
    }

    updateItem(item, index) {
        item.index = index;
        let path = Config.endlessMode.sceneList[index].texture.shopCover;
        item.backgroundImage.texture = resources[path].texture;
        item.commonImage.visible = index !== this.selectedIndex;
        item.selectedImage.visible = index === this.selectedIndex;
    }

    onClickItem(item) {
        this.selectedIndex = item.index;
        DataMgr.set(DataMgr.selectedEndlessScene, this.selectedIndex);
        this.list.refresh();
    }

    onClickReturnButton() {
        App.hideScene("ShopScene");
        App.showScene("MainScene");
    }
}

ShopScene.sceneFilePath = "myLaya/laya/pages/View/ShopScene.scene";
ShopScene.resPathList = Config.endlessMode.sceneList.map(scene => scene.texture.shopCover);
