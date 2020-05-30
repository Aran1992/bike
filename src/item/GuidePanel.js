import {Container, Graphics} from "../libs/pixi-wrapper";
import SceneHelper from "../mgr/SceneHelper";
import GameUtils from "../mgr/GameUtils";
import UIHelper from "../ui/UIHelper";
import Animation from "../ui/Animation";

export default class GuidePanel {
    constructor(mgr, gameMgr, panelContainer, data) {
        this.mgr = mgr;
        this.gameMgr = gameMgr;
        this.panelContainer = panelContainer;
        this.guidePanel = this.createGuidePanel(data);
        this.playAnimation(data.animations);
    }

    destroy() {
        if (this.animation) {
            this.animation.stop();
            delete this.animation;
        }
        this.guidePanel.destroy();
    }

    createGuidePanel(data) {
        const panel = new Container();
        SceneHelper.createSceneByData(data, panel);
        this.panelContainer.addChild(panel);
        if (GameUtils.getItemProp(data, "蒙版") === "1") {
            panel.addChildAt(new Graphics()
                .beginFill(0x000000, 0.5)
                .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
                .endFill(), 0);
        }
        if (GameUtils.getItemProp(data, "暂停直到用户点击") === "1") {
            this.gameMgr.pauseGame();
            UIHelper.onClick(panel, this.onClickGuidePanel.bind(this), true);
        } else if (GameUtils.getItemProp(data, "暂停直到用户跳跃") === "1") {
            this.gameMgr.pauseGame();
            UIHelper.onClick(panel, this.onClickGuidePanelJump.bind(this), true);
        } else if (GameUtils.getItemProp(data, "暂停直到用户使用道具") !== "0") {
            this.gameMgr.pauseGame();
            this.guidePanelItemIndex = parseInt(GameUtils.getItemProp(data, "暂停直到用户使用道具"));
            UIHelper.onClick(panel, this.onClickGuidePanelItem.bind(this), true);
        }
        return panel;
    }

    playAnimation(animations) {
        if (animations) {
            const animation = animations.find(animation => animation.name === "normal");
            if (animation) {
                this.animation = new Animation(this.getChildByID.bind(this), animation, () => this.playAnimation(animations));
            }
        }
    }

    getChildByID(id) {
        return this.guidePanel.uiWithID[id];
    }

    onClickGuidePanel() {
        this.gameMgr.resumeGame();
        this.mgr.destroyGuidePanel();
    }

    onClickGuidePanelJump() {
        this.onClickGuidePanel();
        this.gameMgr.onClickGameContainer();
    }

    onClickGuidePanelItem() {
        this.onClickGuidePanel();
        this.gameMgr.onClickPortableItem(this.guidePanelItemIndex - 1);
    }
}