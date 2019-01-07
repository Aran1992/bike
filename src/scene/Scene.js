import {Container} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";
import SceneHelper from "../mgr/SceneHelper";
import Utils from "../mgr/Utils";
import Config from "../config";

export default class Scene extends Container {
    create(createCallback) {
        this.eventTable = {};
        this.createCallback = createCallback;

        if (this.__proto__.constructor.sceneFilePath) {
            this.sceneFilePath = this.__proto__.constructor.sceneFilePath;
            this.loadResources();
        } else {
            this.onCreate();
            this.createCallback();
            this.createCallback = undefined;
        }
    }

    destroy() {
        this.onDestroy();
        this.parent.removeChild(this);
    }

    show(...args) {
        this.visible = true;
        this.onShow(...args);
    }

    hide() {
        this.visible = false;
        this.onHide();
    }

    loadResources() {
        let resPathList = [this.sceneFilePath];
        if (this.__proto__.constructor.resPathList) {
            resPathList = resPathList.concat(this.__proto__.constructor.resPathList);
        }
        App.loadResources(resPathList, this.onLoadedSceneFile.bind(this));
    }

    onLoadedSceneFile() {
        SceneHelper.loadSceneRes(this.sceneFilePath, this.onLoadedAllRes.bind(this));
    }

    onLoadedAllRes() {
        SceneHelper.createScene(this.sceneFilePath, this);
        this.onCreate();
        this.createCallback();
        this.createCallback = undefined;
    }

    onCreate() {
    }

    onDestroy() {
        for (let event in this.eventTable) {
            if (this.eventTable.hasOwnProperty(event)) {
                EventMgr.unregisterEvent(event, this.eventTable[event]);
            }
        }
        this.eventTable = undefined;
    }

    onShow() {
    }

    onHide() {
    }

    registerEvent(event, handler) {
        handler = handler.bind(this);
        this.eventTable[event] = handler;
        EventMgr.registerEvent(event, handler);
    }

    unregisterEvent(event) {
        EventMgr.unregisterEvent(event, this.eventTable[event]);
        this.eventTable[event] = undefined;
    }

    onClick(button, handler) {
        button.buttonMode = true;
        button.interactive = true;
        button.on("pointerdown", (event) => {
            button.clickPoint = {x: event.data.global.x, y: event.data.global.y};
        });
        button.on("pointerup", (event) => {
            if (button.clickPoint && Utils.isPointInRect(
                {x: event.data.global.x, y: event.data.global.y},
                {
                    x: button.clickPoint.x - Config.buttonClickOffset,
                    y: button.clickPoint.y - Config.buttonClickOffset,
                    width: Config.buttonClickOffset * 2,
                    height: Config.buttonClickOffset * 2,
                })) {
                handler(button, event);
            }
            button.clickPoint = undefined;
        });
        button.on("pointerupoutside", () => {
            button.clickPoint = undefined;
        });
    }
}
