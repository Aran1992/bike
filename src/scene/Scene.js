import {Container, resources} from "../libs/pixi-wrapper";
import EventMgr from "../mgr/EventMgr";
import SceneHelper from "../mgr/SceneHelper";
import UIHelper from "../ui/UIHelper";
import Animation from "../ui/Animation";
import UIGuidePanel from "../item/UIGuidePanel";
import DataMgr from "../mgr/DataMgr";
import MovingBackground from "../ui/MovingBackground";

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
        super.destroy();
    }

    show(...args) {
        this.visible = true;
        if (this._movingBackground) {
            this._movingBackground.start();
        }
        this.onShow(...args);
        this.stopNormalAnimation();
        this.playAnimation("in", () => {
            this.createNormalAnimation();
            this.initGuide();
        });
    }

    hide() {
        this.stopNormalAnimation();
        this.playAnimation("out", () => {
            this.visible = false;
            if (this._movingBackground) {
                this._movingBackground.stop();
            }
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
        if (this.ui._movingBackground) {
            this._movingBackground = new MovingBackground(this.ui._movingBackground, this);
        }
        this.createCallback();
        this.createCallback = undefined;
    }

    createNormalAnimation() {
        const animation = this.getAnimationConfig("normal");
        if (animation) {
            this.normalAnimation = new Animation(this.getChildByID.bind(this), animation, () => this.createNormalAnimation());
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

    initGuide() {
        if (this.sceneFilePath && resources[this.sceneFilePath] && resources[this.sceneFilePath].data) {
            this.uiGuideList = resources[this.sceneFilePath].data.child.find(child => child.label.startsWith("GuideList"));
            if (this.uiGuideList) {
                this.uiGuideList = this.uiGuideList.child;
                this.showGuide();
            }
        }
    }

    showGuide() {
        this.uiGuide = this.uiGuideList.pop();
        if (this.uiGuide) {
            this.uiGuide.animations = resources[this.sceneFilePath].data.animations;
            if (!DataMgr.hasShowedGuide(this.uiGuide)) {
                this.uiGuidePanel = new UIGuidePanel(this.uiGuide, this, this);
            }
        }
    }

    destroyUIGuidePanel() {
        if (this.uiGuidePanel) {
            this.uiGuidePanel.destroy();
            delete this.uiGuidePanel;
            DataMgr.recordGuide(this.uiGuide);
        }
        this.showGuide();
    }
}
