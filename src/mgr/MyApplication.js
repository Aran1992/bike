import {Application, loader, resources} from "../libs/pixi-wrapper";
import StartScene from "../scene/StartScene";
import MapGameScene from "../scene/MapGameScene";
import EndlessGameScene from "../scene/EndlessGameScene";
import GameOverScene from "../scene/GameOverScene";

export default class MyApplication extends Application {
    constructor(args) {
        super(args);

        this.scenesContainer = this.stage;
        this.sceneWidth = args.width;
        this.sceneHeight = args.height;

        this.sceneNameClassMap = {
            "StartScene": StartScene,
            "MapGameScene": MapGameScene,
            "EndlessGameScene": EndlessGameScene,
            "GameOverScene": GameOverScene,
        };

        this.sceneTable = {};
    }

    showScene(sceneName, ...args) {
        if (this.sceneTable[sceneName] === undefined) {
            let sceneClass = this.sceneNameClassMap[sceneName];
            this.sceneTable[sceneName] = new sceneClass();
            this.scenesContainer.addChild(this.sceneTable[sceneName]);
        }
        this.sceneTable[sceneName].show(...args);
    }

    hideScene(sceneName) {
        if (this.sceneTable[sceneName]) {
            this.sceneTable[sceneName].hide();
        }
    }

    loadResources(resPathList, onLoadedCallback) {
        resPathList = Array.from(new Set(resPathList));
        resPathList = resPathList.filter(path => resources[path] === undefined);
        loader.add(resPathList).load(onLoadedCallback);
    }
}
