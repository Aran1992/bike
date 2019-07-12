import Scene from "./Scene";
import {Sprite} from "../libs/pixi-wrapper";

export default class NewContentScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
    }

    onShow(info, closeCallback) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.closeCallback = closeCallback;
        this.ui.title.text = App.getText(info.title);
        this.ui.image.removeChildren();
        let sprite = Sprite.from(info.image);
        sprite.anchor.set(0.5, 0.5);
        sprite.scale.set(info.imageScale, info.imageScale);
        this.ui.image.addChild(sprite);
        this.ui.dsc.text = App.getText(info.dsc);
    }

    onClickReturnButton() {
        App.hideScene("NewContentScene");
        this.closeCallback && this.closeCallback();
    }
}

NewContentScene.sceneFilePath = "myLaya/laya/pages/View/NewContentScene.scene.json";
