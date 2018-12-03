import Config from "../config";
import {App} from "../main";
import EventMgr from "../mgr/EventMgr";
import Scene from "./Scene";
import {Container, Graphics, Text, TextStyle} from "../libs/pixi-wrapper";

export default class GameOverScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChild(mask);

        let textContainer = new Container();
        this.addChild(textContainer);
        let textListHeight = Config.gameOverScene.msgText.fontSize + Config.gameOverScene.buttonText.fontSize * 2;
        let y = (App.sceneHeight - textListHeight) / 2;
        textContainer.position.set(App.sceneWidth / 2, y);

        let textStyle = new TextStyle(Config.gameOverScene.msgText);
        let gameOverText = new Text("Game Over", textStyle);
        this.gameOverText = gameOverText;
        textContainer.addChild(gameOverText);
        gameOverText.anchor.set(0.5, 0);
        gameOverText.position.set(0, 0);

        textStyle = new TextStyle(Config.gameOverScene.buttonText);
        let selectMapText = new Text("Select Map", textStyle);
        textContainer.addChild(selectMapText);
        selectMapText.anchor.set(0.5, 0);
        selectMapText.position.set(0, Config.gameOverScene.msgText.fontSize);
        selectMapText.interactive = true;
        selectMapText.buttonMode = true;
        selectMapText.on("pointerdown", GameOverScene.onClickSelectMapText.bind(this));

        let restartText = new Text("Restart", textStyle);
        textContainer.addChild(restartText);
        restartText.anchor.set(0.5, 0);
        restartText.position.set(0, Config.gameOverScene.msgText.fontSize + Config.gameOverScene.buttonText.fontSize);
        restartText.interactive = true;
        restartText.buttonMode = true;
        restartText.on("pointerdown", GameOverScene.onClickRestartText.bind(this));
    }

    onShow(msg) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);
        this.gameOverText.text = msg || "Game Over";
    }

    static onClickSelectMapText() {
        App.hideScene("GameOverScene");
        App.destroyScene("MapGameScene");
        App.destroyScene("EndlessGameScene");
        App.showScene("StartScene");
    }

    static onClickRestartText() {
        App.hideScene("GameOverScene");
        EventMgr.dispatchEvent("Restart");
    }
}
