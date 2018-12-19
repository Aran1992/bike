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

        this.ui.continueButton.buttonMode = true;
        this.ui.continueButton.interactive = true;
        this.ui.continueButton.on("pointerdown", PauseScene.onClickContinueButton.bind(this));

        this.ui.mainButton.buttonMode = true;
        this.ui.mainButton.interactive = true;
        this.ui.mainButton.on("pointerdown", PauseScene.onClickMainButton.bind(this));

        this.ui.restartButton.buttonMode = true;
        this.ui.restartButton.interactive = true;
        this.ui.restartButton.on("pointerdown", PauseScene.onClickRestartButton.bind(this));
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
        App.showScene("StartScene");
    }

    static onClickRestartButton() {
        App.hideScene("PauseScene");
        EventMgr.dispatchEvent("Restart");
    }
}

PauseScene.sceneFilePath = "myLaya/laya/pages/View/PauseScene.scene";
