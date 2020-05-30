import EventMgr from "./EventMgr";
import Config from "../config";
import GuidePanel from "../item/GuidePanel";

export default class GuideMgr {
    constructor(gameMgr, panelContainer) {
        this.gameMgr = gameMgr;
        this.panelContainer = panelContainer;
        this.guidePanelDataList = [];
        EventMgr.registerEvent("GameWin", this.onGameWin.bind(this));
    }

    clear() {
        this.guidePanelDataList = [];
        this.destroyGuidePanel();
    }

    push(data) {
        this.guidePanelDataList.push(data);
    }

    update() {
        for (let i = 0; i < this.guidePanelDataList.length; i++) {
            const data = this.guidePanelDataList[i];
            if (this.gameMgr.bikeOutterContainer.x >= data.props.x + Config.bikeLeftMargin) {
                this.destroyGuidePanel();
                this.guidePanel = new GuidePanel(this, this.gameMgr, this.panelContainer, data);
                this.guidePanelDataList.splice(i, 1);
                break;
            }
        }
    }

    onGameWin() {
        this.destroyGuidePanel();
    }

    destroyGuidePanel() {
        if (this.guidePanel) {
            this.guidePanel.destroy();
            delete this.guidePanel;
        }
    }
}
