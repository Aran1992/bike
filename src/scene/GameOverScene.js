import Config from "../config";
import EventMgr from "../mgr/EventMgr";
import Scene from "./Scene";
import {Graphics, resources, Sprite, Text, TextStyle} from "../libs/pixi-wrapper";
import MusicMgr from "../mgr/MusicMgr";

let OFFSET = 100;

export default class GameOverScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChild(mask);

        let textStyle = new TextStyle(Config.gameOverScene.msgText);
        let gameOverText = new Text("Game Over", textStyle);
        this.gameOverText = gameOverText;
        this.addChild(gameOverText);
        gameOverText.anchor.set(0.5, 0.5);
        gameOverText.position.set(App.sceneWidth / 2, App.sceneHeight / 2 - OFFSET);

        let mainButton = new Sprite(resources[Config.startImagePath.ui].textures["button-main.png"]);
        this.addChild(mainButton);
        mainButton.anchor.set(0.5, 0.5);
        mainButton.position.set(App.sceneWidth / 4, App.sceneHeight / 2 + OFFSET);
        mainButton.buttonMode = true;
        mainButton.interactive = true;
        mainButton.on("pointerdown", GameOverScene.onClickMainButton.bind(this));

        let mainText = new Text("Main", new TextStyle(Config.gameOverScene.buttonText));
        mainButton.addChild(mainText);
        mainText.anchor.set(0.5, 0.5);
        mainText.position.set(0, mainButton.height / 2);

        let restartButton = new Sprite(resources[Config.startImagePath.ui].textures["button-restart.png"]);
        this.addChild(restartButton);
        restartButton.anchor.set(0.5, 0.5);
        restartButton.position.set(App.sceneWidth / 4 * 3, App.sceneHeight / 2 + OFFSET);
        restartButton.buttonMode = true;
        restartButton.interactive = true;
        restartButton.on("pointerdown", GameOverScene.onClickRestartButton.bind(this));

        let restartText = new Text("Restart", new TextStyle(Config.gameOverScene.buttonText));
        restartButton.addChild(restartText);
        restartText.anchor.set(0.5, 0.5);
        restartText.position.set(0, restartButton.height / 2);
    }

    onShow(msg) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);
        this.gameOverText.text = msg || "Game Over";
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
        App.showScene("StartScene");
    }

    static onClickRestartButton() {
        App.hideScene("GameOverScene");
        EventMgr.dispatchEvent("Restart");
    }
}
