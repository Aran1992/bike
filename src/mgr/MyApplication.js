import Config from "../config";
import {
    AnimatedSprite,
    Application,
    Container,
    Graphics,
    loader,
    Rectangle,
    resources,
    Text,
    TextStyle,
    Texture
} from "../libs/pixi-wrapper";
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
import SystemScene from "../scene/SystemScene";
import HomeScene from "../scene/HomeScene";
import UIHelper from "../ui/UIHelper";
import RankScene from "../scene/RankScene";
import RegisterScene from "../scene/RegisterScene";
import LoginScene from "../scene/LoginScene";

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
        this.mask.hitArea = new Rectangle(0, 0, this.sceneWidth, this.sceneHeight);
        this.mask.visible = false;
        UIHelper.onClick(this.mask, () => this.clickMaskCallback && this.clickMaskCallback(), true);

        this.createLoadScene();

        this.sceneNameClassMap = {
            "MainScene": MainScene,
            "MapGameScene": MapGameScene,
            "EndlessGameScene": EndlessGameScene,
            "GameOverScene": GameOverScene,
            "PauseScene": PauseScene,
            "HomeScene": HomeScene,
            "ShopScene": ShopScene,
            "DrawScene": DrawScene,
            "BikeScene": BikeScene,
            "TipScene": TipScene,
            "GameResultScene": GameResultScene,
            "SystemScene": SystemScene,
            "RankScene": RankScene,
            "RegisterScene": RegisterScene,
            "LoginScene": LoginScene,
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
        this.loadList = resPathList.map(path => [path, false]);
        this.loadScene.visible = true;
        this.updateLoadText();
        loader
            .add(resPathList)
            .on("progress", this.onLoadProgress.bind(this))
            .load(() => {
                this.onLoadEnded();
                let list = this.parsePrefabDependRes(resPathList);
                if (list.length !== 0) {
                    this.loadResources(list, onLoadedCallback);
                } else {
                    onLoadedCallback();
                }
            });
    }

    parsePrefabDependRes(resPathList) {
        let handle = (list, data) => {
            if (data.props.skin) {
                list.push(`myLaya/laya/assets/${data.props.skin}`);
            } else if (data.props.source) {
                list.push(`myLaya/laya/assets/${data.props.source}`);
            } else if (data.props.texture) {
                list.push(`myLaya/laya/assets/${data.props.texture}`);
            } else if (data.props.preset) {
                list.push(`myLaya/${data.props.preset}`);
            }
            data.child.forEach(child => handle(list, child));
        };
        let list = [];
        resPathList.forEach(path => {
            if (path.endsWith(".scene.json") || path.endsWith(".prefab.json")) {
                handle(list, resources[path].data);
            }
        });
        return list;
    }

    createLoadScene() {
        this.loadScene = this.stage.addChild(new Container());

        this.loadScene.addChild(
            new Graphics()
                .beginFill(0x000000, 0.5)
                .drawRect(0, 0, this.sceneWidth, this.sceneHeight)
                .endFill()
        );

        this.loadText = this.loadScene.addChild(new Text("", new TextStyle({
            fontSize: 50,
            fill: "white",
            wordWrap: true,
            wordWrapWidth: this.sceneWidth,
        })));
        this.loadText.anchor.set(0.5, 0);
        this.loadText.position.set(this.sceneWidth / 2, this.sceneHeight / 2 + 50);

        this.loadSprite = this.loadScene.addChild(new AnimatedSprite(Config.loadingImagePathList.map(path => Texture.fromImage(path))));
        this.loadSprite.animationSpeed = 0.5;
        this.loadSprite.anchor.set(0.5, 0.5);
        this.loadSprite.position.set(this.sceneWidth / 2, this.sceneHeight / 2 - 50);
        this.loadSprite.play();
    }

    updateLoadText() {
        // this.loadText.text = this.loadList.map(item => {
        //     return `${item[0]}:${item[1] ? "loaded" : "loading"}`;
        // }).join("\n");
        this.loadText.text = `${Math.floor(this.loadList.reduce((sum, item) => sum + (item[1] ? 1 : 0), 0) / this.loadList.length * 100)}%`;
    }

    onLoadProgress(loader, resource) {
        let item = this.loadList.find(item => resource.url === item[0]);
        if (item) {
            item[1] = true;
            this.updateLoadText();
        }
    }

    onLoadEnded() {
        this.loadScene.visible = false;
    }

    showMask(clickMaskCallback) {
        this.mask.visible = true;
        this.clickMaskCallback = clickMaskCallback;
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
            wordWrap: true,
            wordWrapWidth: App.sceneWidth * 0.8,
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

    showTip(tip, confirmCallback, cancelCallback) {
        App.showScene("TipScene", {tip, confirmCallback, cancelCallback});
    }
}
