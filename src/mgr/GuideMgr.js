import SceneHelper from "./SceneHelper";
import {Container, Graphics} from "../libs/pixi-wrapper";
import GameUtils from "./GameUtils";
import EventMgr from "./EventMgr";
import UIHelper from "../ui/UIHelper";
import Config from "../config";

export default class GuideMgr {
    constructor(gameMgr, panelContainer) {
        this.gameMgr = gameMgr;
        this.panelContainer = panelContainer;
        this.guidePanelDataList = [];
        EventMgr.registerEvent("GameWin", this.onGameWin.bind(this));
    }

    clear() {
        this.guidePanelDataList = [];
        if (this.guidePanel) {
            this.guidePanel.destroy();
            delete this.guidePanel;
        }
    }

    push(data) {
        this.guidePanelDataList.push(data);
    }

    update() {
        for (let i = 0; i < this.guidePanelDataList.length; i++) {
            const data = this.guidePanelDataList[i];
            if (this.gameMgr.bikeOutterContainer.x >= data.props.x + Config.bikeLeftMargin) {
                if (this.guidePanel) {
                    this.guidePanel.destroy();
                    delete this.guidePanel;
                }
                this.guidePanel = this.createGuidePanel(data);
                this.guidePanelDataList.splice(i, 1);
                break;
            }
        }
    }

    createGuidePanel(data) {
        const panel = new Container();
        SceneHelper.createSceneByData(data, panel);
        this.panelContainer.addChild(panel);
        if (GameUtils.getItemProp(data, "蒙版") === "1") {
            this.createMask(panel);
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

    createMask(panel) {
        this.guideMask = panel.addChildAt(new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill(), 0);
    }

    onClickGuidePanel() {
        this.gameMgr.resumeGame();
        this.guidePanel.destroy();
        delete this.guidePanel;
    }

    onClickGuidePanelJump() {
        this.onClickGuidePanel();
        this.gameMgr.onClickGameContainer();
    }

    onClickGuidePanelItem() {
        this.onClickGuidePanel();
        this.gameMgr.onClickPortableItem(this.guidePanelItemIndex - 1);
    }

    onGameWin() {
        if (this.guidePanel) {
            this.guidePanel.destroy();
        }
    }
}
