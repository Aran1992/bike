import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import Config from "../config";
import {resources, Texture} from "../libs/pixi-wrapper";
import MusicMgr from "../mgr/MusicMgr";
import BikeSprite from "../item/BikeSprite";
import EventMgr from "../mgr/EventMgr";
import GameUtils from "../mgr/GameUtils";
import Utils from "../mgr/Utils";
import OnlineMgr from "../mgr/OnlineMgr";

export default class MainScene extends Scene {
    onCreate() {
        this.onClick(this.ui.endlessModeButton, this.onClickEndlessModeButton.bind(this));
        this.onClick(this.ui.mapModeButton, this.onClickMapModeButton.bind(this));
        this.onClick(this.ui.homeButton, this.onClickHomeButton.bind(this));
        this.onClick(this.ui.shopButton, this.onClickShopButton.bind(this));
        this.onClick(this.ui.drawButton, this.onClickDrawButton.bind(this));
        this.onClick(this.ui.bikeButton, this.onClickBikeButton.bind(this));
        this.onClick(this.ui.systemButton, this.onClickSystemButton.bind(this));
        this.onClick(this.ui.rankButton, this.onClickRankButton.bind(this));
        if (window.PlatformHelper.canLogout) {
            this.onClick(this.ui.userImage, this.onClickUserImage.bind(this));
        }
        EventMgr.registerEvent("RefreshPlayerData", this.onRefreshPlayerData.bind(this));

        this.bikeSprite = new BikeSprite(this.ui.bikeSpritePanel);

        this.mode = "Endless";
        this.refreshEndlessMode();

        this.initGift();
    }

    onRefreshPlayerData() {
        this.ui.distanceText.text = `${Math.floor(DataMgr.get(DataMgr.rankDistance, 0))}m`;
        this.ui.totalScoreText.text = DataMgr.get(DataMgr.rankTotalScore, 0);
    }

    onShow() {
        this.ui.distanceText.text = `${Math.floor(DataMgr.get(DataMgr.rankDistance, 0))}m`;
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.coinText.text = DataMgr.get(DataMgr.coin, 0);
        this.ui.totalScoreText.text = DataMgr.get(DataMgr.rankTotalScore, 0);

        if (this.mode === "Map") {
            this.refreshMapMode();
        } else {
            this.refreshEndlessMode();
        }

        MusicMgr.playBGM(Config.mainBgmPath);

        this.bikeSprite.setBikeID(DataMgr.get(DataMgr.selectedBike, 0));
        this.bikeSprite.setPosition(-this.bikeSprite.getWidth() / 2, 0);
        this.bikeSprite.play();
        this.onUpdate();

        this.ui.userImage.children[0].texture = Texture.from(DataMgr.get(DataMgr.headurl, Config.defaultEnemyHeadImagePath));
        this.ui.userNameText.text = DataMgr.getPlayerName();

        GameUtils.closeLogoScene && GameUtils.closeLogoScene();
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
        this.mode = "Map";
        this.refreshMapMode();
        App.showScene("PreparationScene", this.mode);
    }

    refreshMapMode() {
        let index = DataMgr.get(DataMgr.currentMapScene);
        let path = Config.mapList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickEndlessModeButton() {
        this.mode = "Endless";
        this.refreshEndlessMode();
        App.showScene("PreparationScene", this.mode);
    }

    refreshEndlessMode() {
        let index = DataMgr.get(DataMgr.selectedEndlessScene, 0);
        let path = Config.endlessMode.sceneList[index].texture.mainCover;
        this.ui.sceneImage.children[0].texture = resources[path].texture;
    }

    onClickHomeButton() {
        App.hideScene("MainScene");
        App.showScene("HomeScene", DataMgr.get(DataMgr.homeData), true);
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

    onClickUserImage() {
        App.showTip(App.getText("Do you want log out?"), () => {
            delete localStorage.username;
            delete localStorage.password;
            App.hideScene("MainScene");
            App.showScene("LoginScene");
        });
    }

    initGift() {
        this.onClick(this.ui.giftButton, this.onClickGiftButton.bind(this));
        this.updateGiftState();
        setInterval(() => {
            this.updateGiftState();
        }, 1000);
    }

    updateGiftState() {
        let remainTime = OnlineMgr.getGiftRemainTime();
        if (remainTime) {
            this.ui.giftTimeText.visible = true;
            this.ui.giftTimeText.text = Utils.getCDTimeString(remainTime * 1000);
        } else {
            this.ui.giftTimeText.visible = false;
        }
    }

    onClickGiftButton() {
        if (!OnlineMgr.hasGift()) {
            App.showNotice(App.getText("ThereIsNoGiftToday"));
        } else if (OnlineMgr.getGiftRemainTime() === 0) {
            App.showScene("GiftScene");
        } else {
            App.showNotice(App.getText("领取礼包的时间还没到"));
        }
    }
}

MainScene.sceneFilePath = "myLaya/laya/pages/View/MainScene.scene.json";
MainScene.resPathList = Config.mapList.map(scene => scene.texture.mainCover)
    .concat(Config.endlessMode.sceneList.map(scene => scene.texture.mainCover))
    .concat(BikeSprite.resPathList)
    .concat([Config.mainBgmPath]);
