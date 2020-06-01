import {Container, Graphics} from "../libs/pixi-wrapper";
import SceneHelper from "../mgr/SceneHelper";
import GameUtils from "../mgr/GameUtils";
import UIHelper from "../ui/UIHelper";
import Animation from "../ui/Animation";

export default class UIGuidePanel {
    constructor(data, mgr, panelContainer) {
        this.mgr = mgr;
        const panel = new Container();
        SceneHelper.createSceneByData(data, panel, true);
        panelContainer.addChild(panel);
        if (GameUtils.getItemProp(data, "蒙版") === "1") {
            this.guideMask = new Graphics()
                .beginFill(0x000000, 0.5)
                .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
                .endFill();
            panel.addChildAt(this.guideMask, 0);
        }
        if (GameUtils.getItemProp(data, "显示直到用户点击") === "1") {
            UIHelper.onClick(panel, this.onClickGuidePanel.bind(this), true);
            UIHelper.controlClick((button) => button === panel);
        }
        const controlID = GameUtils.getItemProp(data, "显示直到点击控件");
        if (controlID !== undefined) {
            const targetButton = mgr.ui && mgr.ui[controlID];
            if (targetButton) {
                if (this.guideMask) {
                    this.guideMask.clear();
                    this.guideMask.beginFill(0x000000, 0.5);
                    this.guideMask.drawRect(0, 0, App.sceneWidth, App.sceneHeight);
                    this.guideMask.beginHole();
                    const bounds = targetButton.getBounds();
                    const {x, y} = App.trans2GlobalPosition(bounds);
                    this.guideMask.drawRect(x, y, bounds.width, bounds.height);
                    this.guideMask.endHole();
                    this.guideMask.endFill();
                }
                UIHelper.controlClick((button) => targetButton === button, this.onClickGuidePanel.bind(this));
            } else {
                alert(`引导界面不存在要点击的控件：${controlID}`);
            }
        }
        const remainTime = parseFloat(GameUtils.getItemProp(data, "显示时长"));
        if (remainTime) {
            this.timer = setTimeout(this.onTimeout, remainTime * 1000);
        }
        this.guidePanel = panel;
        this.playAnimation(data.animations);
    }

    destroy() {
        UIHelper.freeClick();
        if (this.timer) {
            clearTimeout(this.timer);
        }
        if (this.animation) {
            this.animation.stop();
            delete this.animation;
        }
        this.guidePanel.destroy();
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
        this.mgr.destroyUIGuidePanel();
    }

    onTimeout() {
        this.onClickGuidePanel();
    }
}
