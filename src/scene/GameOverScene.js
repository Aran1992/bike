import Config from "../config";
import EventMgr from "../mgr/EventMgr";
import Scene from "./Scene";
import {Graphics} from "../libs/pixi-wrapper";
import MusicMgr from "../mgr/MusicMgr";

export default class GameOverScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.mainButton, GameOverScene.onClickMainButton);
        this.onClick(this.ui.restartButton, GameOverScene.onClickRestartButton);
        this.onClick(this.ui.rebornButton, GameOverScene.onClickRebornButton);
    }

    onShow(msg) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);
        this.ui.gameOverText.text = msg || "Game Over";
        if (msg === "Game Over") {
            MusicMgr.playSound(Config.soundPath.die);
        } else {
            MusicMgr.pauseBGM();
            MusicMgr.playSound(Config.soundPath.throughFlag);
        }
    }

    static onClickMainButton() {
        App.hideScene("GameOverScene");
        App.destroyScene("MapGameScene");
        App.destroyScene("EndlessGameScene");
        App.showScene("MainScene");
    }

    static onClickRestartButton() {
        App.hideScene("GameOverScene");
        EventMgr.dispatchEvent("Restart");
    }

    static onClickRebornButton() {
        App.hideScene("GameOverScene");
        EventMgr.dispatchEvent("Reborn");
    }
}

GameOverScene.sceneFilePath = "myLaya/laya/pages/View/GameOverScene.scene";
