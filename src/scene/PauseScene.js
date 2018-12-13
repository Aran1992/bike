import Scene from "./Scene";
import {Graphics, resources, Sprite, Text, TextStyle} from "../libs/pixi-wrapper";
import {App} from "../main";
import Config from "../config";
import EventMgr from "../mgr/EventMgr";

let OFFSET = 150;

export default class PauseScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChild(mask);

        let pauseTextSprite = new Sprite(resources[Config.startImagePath.ui].textures["text-pause.png"]);
        this.addChild(pauseTextSprite);
        pauseTextSprite.anchor.set(0.5, 0.5);
        pauseTextSprite.position.set(App.sceneWidth / 2, App.sceneHeight / 2 - OFFSET);

        let continueButton = new Sprite(resources[Config.startImagePath.ui].textures["button-continue.png"]);
        this.addChild(continueButton);
        continueButton.anchor.set(0.5, 0.5);
        continueButton.position.set(App.sceneWidth / 2, App.sceneHeight / 2);
        continueButton.buttonMode = true;
        continueButton.interactive = true;
        continueButton.on("pointerdown", PauseScene.onClickContinueButton.bind(this));

        let continueText = new Text("Continue", new TextStyle(Config.gameOverScene.buttonText));
        continueButton.addChild(continueText);
        continueText.anchor.set(0.5, 0.5);
        continueText.position.set(0, continueButton.height / 2);

        let mainButton = new Sprite(resources[Config.startImagePath.ui].textures["button-main.png"]);
        this.addChild(mainButton);
        mainButton.anchor.set(0.5, 0.5);
        mainButton.position.set(App.sceneWidth / 4, App.sceneHeight / 2 + OFFSET);
        mainButton.buttonMode = true;
        mainButton.interactive = true;
        mainButton.on("pointerdown", PauseScene.onClickMainButton.bind(this));

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
        restartButton.on("pointerdown", PauseScene.onClickRestartButton.bind(this));

        let restartText = new Text("Restart", new TextStyle(Config.gameOverScene.buttonText));
        restartButton.addChild(restartText);
        restartText.anchor.set(0.5, 0.5);
        restartText.position.set(0, restartButton.height / 2);
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
