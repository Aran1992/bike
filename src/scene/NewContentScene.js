import Scene from "./Scene";
import {Texture} from "../libs/pixi-wrapper";

export default class NewContentScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
    }

    onShow(info, closeCallback) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.closeCallback = closeCallback;
        this.ui.title.text = App.getText(info.title);
        this.ui.image.children[0].texture = Texture.from(info.image);
        this.ui.image.scale.set(info.imageScale, info.imageScale);
        this.ui.dsc.text = App.getText(info.dsc);
    }

    onClickReturnButton() {
        App.hideScene("NewContentScene");
        this.closeCallback && this.closeCallback();
    }
}

NewContentScene.sceneFilePath = "myLaya/laya/pages/View/NewContentScene.scene.json";
