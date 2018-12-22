import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import Config from "../config";
import {resources} from "../libs/pixi-wrapper";

export default class MainScene extends Scene {
    onCreate() {
        [
            this.ui.systemButton,
            this.ui.homeButton,
            this.ui.rankButton,
            this.ui.drawButton,
            this.ui.bikeButton,
        ].forEach(button => this.onClick(button, this.onClickCloseFuncButton.bind(this)));

        this.onClick(this.ui.endlessModeButton, this.onClickEndlessModeButton.bind(this));
        this.onClick(this.ui.mapModeButton, this.onClickMapModeButton.bind(this));
        this.onClick(this.ui.startButton, this.onClickStartButton.bind(this));
        this.onClick(this.ui.shopButton, this.onClickShopButton.bind(this));
    }

    onShow() {
        this.ui.distanceText.text = `${Math.floor(DataMgr.get(DataMgr.distance, 0))}m`;
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
        this.ui.totalScoreText.text = DataMgr.get(DataMgr.totalScore, 0);
        this.ui.costCoinText.text = 0;

        this.onClickEndlessModeButton();
    }

    onClickCloseFuncButton() {
        // todo 显示信息界面
    }

    onClickMapModeButton() {
        this.ui.costCoinPanel.visible = true;
        this.mode = "Map";
        let index = DataMgr.get(DataMgr.currentMapScene);
        let path = Config.mapList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickEndlessModeButton() {
        this.ui.costCoinPanel.visible = false;
        this.mode = "Endless";
        let index = DataMgr.get(DataMgr.selectedEndlessScene, 0);
        let path = Config.endlessMode.sceneList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickStartButton() {
        if (this.mode === "Map") {
            App.hideScene("MainScene");
            App.showScene("MapGameScene", DataMgr.get(DataMgr.currentMapScene));
        } else if (this.mode === "Endless") {
            App.hideScene("MainScene");
            App.showScene("EndlessGameScene", DataMgr.get(DataMgr.selectedEndlessScene, 0));
        }
    }

    onClickShopButton() {
        App.hideScene("MainScene");
        App.showScene("ShopScene");
    }
}

MainScene.sceneFilePath = "myLaya/laya/pages/View/MainScene.scene";
MainScene.resPathList = Config.mapList.map(scene => scene.texture.mainCover)
    .concat(Config.endlessMode.sceneList.map(scene => scene.texture.mainCover));
