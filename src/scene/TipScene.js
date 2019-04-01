import Scene from "./Scene";
import {Graphics} from "../libs/pixi-wrapper";

export default class TipScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.closeButton, this.onClickCloseButton.bind(this));
        this.onClick(this.ui.confirmButton, this.onClickConfirmButton.bind(this));
        this.onClick(this.ui.cancelButton, this.onClickCancelButton.bind(this));
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.ui.tipText.text = args.tip;

        this.ui.panel.height = this.ui.tipText.height + 170;

        this.ui.confirmButton.y = this.ui.tipText.y + this.ui.tipText.height + 25;
        this.ui.cancelButton = this.ui.confirmButton.y;

        this.args = args;
    }

    onClickCloseButton() {
        App.hideScene("TipScene");
    }

    onClickConfirmButton() {
        App.hideScene("TipScene");
        this.args.confirmCallback();
    }

    onClickCancelButton() {
        App.hideScene("TipScene");
        this.args.cancelCallback();
    }
}

TipScene.sceneFilePath = "myLaya/laya/pages/View/TipScene.scene";
