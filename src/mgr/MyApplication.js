import {Application, Container, loader, Rectangle, resources} from "../libs/pixi-wrapper";
import MapGameScene from "../scene/MapGameScene";
import EndlessGameScene from "../scene/EndlessGameScene";
import GameOverScene from "../scene/GameOverScene";
import PauseScene from "../scene/PauseScene";
import MainScene from "../scene/MainScene";
import ShopScene from "../scene/ShopScene";
import DrawScene from "../scene/DrawScene";
import BikeScene from "../scene/BikeScene";

export default class MyApplication extends Application {
    constructor(args) {
        super(args);

        window.App = this;

        this.sceneWidth = args.width;
        this.sceneHeight = args.height;

        this.scenesContainer = new Container();
        this.stage.addChild(this.scenesContainer);

        this.mask = new Container();
        this.stage.addChild(this.mask);
        this.mask.interactive = true;
        this.mask.hitArea = new Rectangle(0, 0, this.sceneWidth, this.sceneHeight);
        this.mask.visible = false;

        this.sceneNameClassMap = {
            "MainScene": MainScene,
            "MapGameScene": MapGameScene,
            "EndlessGameScene": EndlessGameScene,
            "GameOverScene": GameOverScene,
            "PauseScene": PauseScene,
            "ShopScene": ShopScene,
            "DrawScene": DrawScene,
            "BikeScene": BikeScene,
        };

        this.sceneTable = {};
    }

    showScene(sceneName, ...args) {
        if (this.sceneTable[sceneName] === undefined) {
            let sceneClass = this.sceneNameClassMap[sceneName];
            this.sceneTable[sceneName] = new sceneClass();
            this.scenesContainer.addChild(this.sceneTable[sceneName]);
            this.sceneTable[sceneName].create(() => {
                this.sceneTable[sceneName].show(...args);
            });
        } else {
            this.sceneTable[sceneName].show(...args);
        }
    }

    hideScene(sceneName) {
        if (this.sceneTable[sceneName]) {
            this.sceneTable[sceneName].hide();
        }
    }

    destroyScene(sceneName) {
        if (this.sceneTable[sceneName]) {
            this.sceneTable[sceneName].destroy();
            this.sceneTable[sceneName] = undefined;
        }
    }

    loadResources(resPathList, onLoadedCallback) {
        resPathList = Array.from(new Set(resPathList));
        resPathList = resPathList.filter(path => resources[path] === undefined);
        loader.add(resPathList).load(onLoadedCallback);
    }

    showMask() {
        this.mask.visible = true;
    }

    hideMask() {
        this.mask.visible = false;
    }
}
