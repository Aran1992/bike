import Scene from "./Scene";
import {Texture} from "../libs/pixi-wrapper";

export default class NewContentScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
    }

    onShow(args, closeCallback) {
        this.closeCallback = closeCallback;
        this.ui.title.text = args.title;
        this.ui.image.texture = Texture.from(args.image);
        this.ui.image.scale.set(args.imageScale, args.imageScale);
        this.ui.dsc.text = args.dsc;
    }

    onClickReturnButton() {
        App.hideScene("NewContentScene");
        this.closeCallback && this.closeCallback();
    }
}

NewContentScene.sceneFilePath = "myLaya/laya/pages/View/NewContentScene.scene.json";
