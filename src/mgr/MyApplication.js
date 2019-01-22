import Config from "../config";
import {Application, Container, Graphics, loader, Rectangle, resources, Text, TextStyle} from "../libs/pixi-wrapper";
import MapGameScene from "../scene/MapGameScene";
import EndlessGameScene from "../scene/EndlessGameScene";
import GameOverScene from "../scene/GameOverScene";
import PauseScene from "../scene/PauseScene";
import MainScene from "../scene/MainScene";
import ShopScene from "../scene/ShopScene";
import DrawScene from "../scene/DrawScene";
import BikeScene from "../scene/BikeScene";
import TipScene from "../scene/TipScene";
import GameResultScene from "../scene/GameResultScene";

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
            "TipScene": TipScene,
            "GameResultScene": GameResultScene,
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

    getScene(sceneName) {
        return this.sceneTable[sceneName];
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

    showNotice(notice) {
        let container = new Container();

        let margin = Config.notice.margin;

        let text = new Text(notice, new TextStyle({
            fill: Config.notice.fill,
            fontSize: Config.notice.fontSize,
        }));
        text.position.set(margin / 2, margin / 2);

        let mask = new Graphics();
        mask.beginFill(Config.notice.backgroundColor, Config.notice.backgroundAlpha);
        mask.drawRect(0, 0, text.width + margin, text.height + margin);
        mask.endFill();

        container.addChild(mask);
        container.addChild(text);

        container.position.set(this.sceneWidth / 2 - text.width / 2, Config.notice.positionY);
        this.stage.addChild(container);

        setTimeout(() => {
            let reduce = 1000 / 60 / Config.notice.fadeDuration;
            let handler = () => {
                container.alpha -= reduce;
                if (container.alpha < 0) {
                    container.destroy();
                } else {
                    requestAnimationFrame(handler);
                }
            };
            handler();
        }, Config.notice.duration);
    }
}
