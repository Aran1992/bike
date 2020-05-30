import {Container, resources} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";
import SceneHelper from "../mgr/SceneHelper";
import UIHelper from "../ui/UIHelper";
import Animation from "../ui/Animation";

export default class Scene extends Container {
    create(createCallback) {
        this.eventTable = {};
        this.createCallback = createCallback;

        if (this.__proto__.constructor.sceneFilePath) {
            this.sceneFilePath = this.__proto__.constructor.sceneFilePath;
            this.loadResources();
        } else {
            this.internalOnCreate();
        }
    }

    destroy() {
        this.onDestroy();
        this.parent.removeChild(this);
    }

    show(...args) {
        this.visible = true;
        this.onShow(...args);
        this.stopNormalAnimation();
        this.playAnimation("in", () => {
            this.createNormalAnimation();
        });
    }

    hide() {
        this.stopNormalAnimation();
        this.playAnimation("out", () => {
            this.visible = false;
            this.onHide();
        });
    }

    loadResources() {
        let resPathList = [this.sceneFilePath];
        if (this.__proto__.constructor.resPathList) {
            resPathList = resPathList.concat(this.__proto__.constructor.resPathList);
        }
        App.loadResources(resPathList, this.onLoadedAllRes.bind(this));
    }

    onLoadedAllRes() {
        SceneHelper.createScene(this.sceneFilePath, this);
        this.internalOnCreate();
    }

    internalOnCreate() {
        this.onCreate();
        this.createCallback();
        this.createCallback = undefined;
    }

    createNormalAnimation() {
        const animation = this.getAnimationConfig("normal");
        if (animation) {
            this.normalAnimation = new Animation(this, animation, () => this.createNormalAnimation());
        }
    }

    stopNormalAnimation() {
        if (this.normalAnimation) {
            this.normalAnimation.stop();
            delete this.normalAnimation;
        }
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
        if (this.normalAnimation) {
            this.normalAnimation.stop();
            delete this.normalAnimation;
        }
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

    onClick(...args) {
        UIHelper.onClick(...args);
    }

    isShowed() {
        return this.visible;
    }

    getChildByID(id) {
        return this.uiWithID[id];
    }

    playAnimation(name, callback = () => 0) {
        const animation = this.getAnimationConfig(name);
        if (animation) {
            App.showMask();
            return new Animation(this.getChildByID.bind(this), animation, () => {
                App.hideMask();
                callback();
            });
        } else {
            callback();
        }
    }

    getAnimationConfig(name) {
        if (this.sceneFilePath && resources[this.sceneFilePath] && resources[this.sceneFilePath].data.animations) {
            return resources[this.sceneFilePath].data.animations.find(animation => animation.name === name);
        }
    }
}
