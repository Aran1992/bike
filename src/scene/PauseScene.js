import Scene from "./Scene";
import {Graphics} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";

export default class PauseScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.continueButton, PauseScene.onClickContinueButton);
        this.onClick(this.ui.mainButton, PauseScene.onClickMainButton);
        this.onClick(this.ui.restartButton, PauseScene.onClickRestartButton);
    }

    onShow() {
        this.parent.setChildIndex(this, this.parent.children.length - 1);
    }

    static onClickContinueButton() {
        App.hideScene("PauseScene");
        EventMgr.dispatchEvent("Continue");
    }

    static onClickMainButton() {
        App.hideScene("PauseScene");
        App.destroyScene("MapGameScene");
        App.destroyScene("EndlessGameScene");
        App.showScene("MainScene");
    }

    static onClickRestartButton() {
        App.hideScene("PauseScene");
        EventMgr.dispatchEvent("Restart");
    }
}

PauseScene.sceneFilePath = "myLaya/laya/pages/View/PauseScene.scene";
