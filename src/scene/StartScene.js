import Config from "../config";
import {App} from "../main";
import Scene from "./Scene";
import {Container, Text, TextStyle} from "../libs/pixi-wrapper";
import MusicMgr from "../mgr/MusicMgr";

export default class StartScene extends Scene {
    onCreate() {
        let textContainer = new Container();
        this.addChild(textContainer);
        let x = App.sceneWidth / 2;
        let textListHeight = Config.startScene.mapText.fontSize * (Config.mapList.length + Config.endlessMode.sceneList.length);
        let y = (App.sceneHeight - textListHeight) / 2;
        textContainer.position.set(x, y);

        let textStyle = new TextStyle(Config.startScene.endlessText);
        Config.endlessMode.sceneList.forEach((section, index) => {
            let text = new Text(`Endless-${index}:${section.showName}`, textStyle);
            textContainer.addChild(text);
            text.anchor.set(0.5, 0);
            text.position.set(0, text.height * index);
            text.interactive = true;
            text.buttonMode = true;
            text.on("pointerdown", () => StartScene.onClickEndlessModeText(index));
        });

        textStyle = new TextStyle(Config.startScene.mapText);
        Config.mapList.forEach((mapConfig, index) => {
            let text = new Text(`MAP-${index}: ${mapConfig.showName}`, textStyle);
            textContainer.addChild(text);
            text.anchor.set(0.5, 0);
            text.position.set(0, text.height * (index + Config.endlessMode.sceneList.length));
            text.interactive = true;
            text.buttonMode = true;
            text.on("pointerdown", () => StartScene.onClickMapText(index));
        });
    }

    onShow() {
        MusicMgr.playBGM(Config.mainBgmPath);
    }

    static onClickEndlessModeText(index) {
        App.hideScene("StartScene");
        App.showScene("EndlessGameScene", index);
    }

    static onClickMapText(index) {
        App.hideScene("StartScene");
        App.showScene("MapGameScene", index);
    }
}
