import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import Config from "../config";
import {resources} from "../libs/pixi-wrapper";
import MusicMgr from "../mgr/MusicMgr";
import BikeSprite from "../item/BikeSprite";
import RunOption from "../../run-option";

export default class MainScene extends Scene {
    onCreate() {
        this.onClick(this.ui.endlessModeButton, this.onClickEndlessModeButton.bind(this));
        this.onClick(this.ui.mapModeButton, this.onClickMapModeButton.bind(this));
        this.onClick(this.ui.startButton, this.onClickStartButton.bind(this));
        this.onClick(this.ui.homeButton, this.onClickHomeButton.bind(this));
        this.onClick(this.ui.shopButton, this.onClickShopButton.bind(this));
        this.onClick(this.ui.drawButton, this.onClickDrawButton.bind(this));
        this.onClick(this.ui.bikeButton, this.onClickBikeButton.bind(this));
        this.onClick(this.ui.systemButton, this.onClickSystemButton.bind(this));
        this.onClick(this.ui.rankButton, this.onClickRankButton.bind(this));

        this.bikeSprite = new BikeSprite(this.ui.bikeSpritePanel);

        this.onClickEndlessModeButton();
    }

    onShow() {
        this.ui.distanceText.text = `${Math.floor(DataMgr.get(DataMgr.distance, 0))}m`;
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
        this.ui.totalScoreText.text = DataMgr.get(DataMgr.totalScore, 0);
        this.ui.costCoinText.text = 0;

        if (this.mode === "Map") {
            this.onClickMapModeButton();
        } else {
            this.onClickEndlessModeButton();
        }

        MusicMgr.playBGM(Config.mainBgmPath);

        this.bikeSprite.setBikeID(DataMgr.get(DataMgr.selectedBike, 0));
        this.bikeSprite.setPosition(-this.bikeSprite.getWidth() / 2, 0);
        this.bikeSprite.play();
        this.onUpdate();
    }

    onHide() {
        this.bikeSprite.stop();
        cancelAnimationFrame(this.animationFrame);
    }

    onUpdate() {
        let x = this.bikeSprite.getPositionX() + Config.mainScene.bikeSprite.velocityX;
        this.bikeSprite.setPositionX(x);
        if (this.bikeSprite.getLeftBorderX() >= App.sceneWidth) {
            this.bikeSprite.setPositionX(-this.bikeSprite.getWidth() / 2);
        }
        this.animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }

    onClickMapModeButton() {
        this.ui.costCoinPanel.visible = true;
        this.ui.costCoinText.text = Config.rankMode.costCoin;
        this.mode = "Map";
        this.refreshMapMode();
    }

    refreshMapMode() {
        let index = DataMgr.get(DataMgr.currentMapScene);
        let path = Config.mapList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickEndlessModeButton() {
        this.ui.costCoinPanel.visible = false;
        this.mode = "Endless";
        this.refreshEndlessMode();
    }

    refreshEndlessMode() {
        let index = DataMgr.get(DataMgr.selectedEndlessScene, 0);
        let path = Config.endlessMode.sceneList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickStartButton() {
        if (this.mode === "Map") {
            let coin = DataMgr.get(DataMgr.coin, 0);
            let costCoin = Config.rankMode.costCoin;
            if (coin >= costCoin) {
                DataMgr.set(DataMgr.coin, coin - costCoin);
                App.hideScene("MainScene");
                if (RunOption.fixedMapID === undefined || RunOption.fixedMapID === -1) {
                    App.showScene("MapGameScene", DataMgr.get(DataMgr.currentMapScene));
                } else {
                    App.showScene("MapGameScene", RunOption.fixedMapID);
                }
            } else {
                App.showNotice("Gold Coin is not enough!");
            }
        } else if (this.mode === "Endless") {
            App.hideScene("MainScene");
            App.showScene("EndlessGameScene", DataMgr.get(DataMgr.selectedEndlessScene, 0));
        }
    }

    onClickHomeButton() {
        App.hideScene("MainScene");
        App.showScene("HomeScene", DataMgr.get("homeData"));
    }

    onClickShopButton() {
        App.hideScene("MainScene");
        App.showScene("ShopScene");
    }

    onClickDrawButton() {
        App.hideScene("MainScene");
        App.showScene("DrawScene");
    }

    onClickBikeButton() {
        App.hideScene("MainScene");
        App.showScene("BikeScene");
    }

    onClickSystemButton() {
        App.hideScene("MainScene");
        App.showScene("SystemScene");
    }

    onClickRankButton() {
        App.hideScene("MainScene");
        App.showScene("RankScene");
    }
}

MainScene.sceneFilePath = "myLaya/laya/pages/View/MainScene.scene.json";
MainScene.resPathList = Config.mapList.map(scene => scene.texture.mainCover)
    .concat(Config.endlessMode.sceneList.map(scene => scene.texture.mainCover))
    .concat(BikeSprite.resPathList);
