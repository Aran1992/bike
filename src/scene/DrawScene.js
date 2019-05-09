import Config from "../config";
import Scene from "./Scene";
import Utils from "../mgr/Utils";
import DataMgr from "../mgr/DataMgr";
import {Rectangle} from "../libs/pixi-wrapper";
import BikeSprite from "../item/BikeSprite";
import GameUtils from "../mgr/GameUtils";
import MusicMgr from "../mgr/MusicMgr";

export default class DrawScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.onClick(this.ui.bikeButton, this.onClickBikeButton.bind(this));
        this.onClick(this.ui.drawButton, this.onClickDrawButton.bind(this));
        this.onClick(this.ui.closeDetailButton, this.onClickCloseDetailButton.bind(this));
        this.ui.detailPanel.visible = false;
        this.ui.detailPanel.interactive = true;
        this.ui.detailPanel.hitArea = new Rectangle(0, 0, App.sceneWidth, App.sceneHeight);
        this.ballImage = this.ui.ballImage.children[0];
        this.ballImage.anchor.set(0.5, 0.5);
        this.ballImage.position.set(this.ui.ballImage.mywidth / 2, this.ui.ballImage.myheight / 2);
        this.ballImage.visible = false;
        let detailPanel = this.ui.detailPanel.children[0];
        this.bikeSprite = new BikeSprite(detailPanel);
        this.bikeSprite.setPosition(detailPanel.mywidth / 2, Config.drawScene.bikeSprite.y);
        this.onTick();
        this.timer = setInterval(this.onTick.bind(this), 1000);
        this.ui.costDiamondText.text = Config.diamondDrawCost;
    }

    onShow() {
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
    }

    onHide() {
        if (this.drawSound) {
            MusicMgr.stopLoopSound(this.drawSound);
            this.drawSound = undefined;
        }
    }

    onClickReturnButton() {
        App.hideScene("DrawScene");
        App.showScene("MainScene");
    }

    onClickBikeButton() {
        App.hideScene("DrawScene");
        App.showScene("BikeScene");
    }

    onClickDrawButton() {
        if (this.ui.costDiamondPanel.visible) {
            let diamond = DataMgr.get(DataMgr.diamond, 0);
            if (diamond >= Config.diamondDrawCost) {
                this.startAnimation();
            } else {
                App.showNotice(App.getText("DiamondIsNotEnough"));
            }
        } else {
            this.startAnimation();
        }
    }

    startAnimation() {
        App.showMask(this.onAnimationEnded.bind(this));
        this.ballImage.visible = true;
        this.ballImage.scale.set(0, 0);
        this.ballImage.rotation = 0;
        this.animationFrame = 0;
        this.totalAnimationFrame = 180;
        this.totalRotation = Math.PI * 2 * 6;
        this.animationID = requestAnimationFrame(this.onAnimation.bind(this));
        this.drawSound = MusicMgr.playLoopSound(Config.drawScene.res.drawSound);
    }

    onAnimation() {
        let i = this.ballImage;
        i.scale.x += 1 / this.totalAnimationFrame;
        i.scale.y += 1 / this.totalAnimationFrame;
        i.rotation += this.totalRotation / this.totalAnimationFrame;
        this.animationFrame++;
        if (this.animationFrame === this.totalAnimationFrame) {
            setTimeout(this.onAnimationEnded.bind(this), 500);
        } else {
            this.animationID = requestAnimationFrame(this.onAnimation.bind(this));
        }
    }

    onAnimationEnded() {
        if (this.drawSound) {
            MusicMgr.stopLoopSound(this.drawSound);
            this.drawSound = undefined;
        }

        if (this.ui.costDiamondPanel.visible) {
            let diamond = DataMgr.get(DataMgr.diamond, 0);
            diamond -= Config.diamondDrawCost;
            DataMgr.set(DataMgr.diamond, diamond);
            this.ui.diamondText.text = diamond;
        }

        App.hideMask();

        cancelAnimationFrame(this.animationID);

        let index = Utils.randomWithWeight(Config.bikeList.map(item => item.weight));
        this.id = Config.bikeList[index].id;

        let ownedBikeList = DataMgr.get(DataMgr.ownedBikeList, []);
        let bikeLevelMap = DataMgr.get(DataMgr.bikeLevelMap, {});
        this.ui.unlockIcon.visible = false;
        this.ui.levelUpIcon.visible = false;
        let config = Config.bikeList.find(item => item.id === this.id);
        let highestLevel = false;
        if (ownedBikeList.indexOf(this.id) === -1) {
            ownedBikeList.push(this.id);
            DataMgr.set(DataMgr.ownedBikeList, ownedBikeList);
            bikeLevelMap[this.id] = 0;
            this.ui.unlockIcon.visible = true;
        } else {
            if ((config.coinPercent || Config.bike.coinPercent)[bikeLevelMap[this.id] + 1] === undefined) {
                highestLevel = true;
            } else {
                bikeLevelMap[this.id]++;
                this.ui.levelUpIcon.visible = true;
            }
        }
        DataMgr.set(DataMgr.bikeLevelMap, bikeLevelMap);
        let nextTime = (new Date()).getTime() + Config.freeDrawInterval * 1000;
        DataMgr.set(DataMgr.nextFreeDrawTime, nextTime);

        this.ballImage.visible = false;
        this.ui.detailPanel.visible = true;
        this.bikeSprite.setBikeID(this.id);
        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[this.id];
        let bonusDsc = App.getText("BonusDsc", {
            coin: Math.floor(GameUtils.getBikeConfig("coinPercent", this.id, level,) * 100) + "%",
            distance: Math.floor(GameUtils.getBikeConfig("distancePercent", this.id, level,) * 100) + "%",
            score: Math.floor(GameUtils.getBikeConfig("scorePercent", this.id, level,) * 100) + "%",
        });
        let levelDsc = App.getText("LevelDsc", {level: `${level + 1} ${highestLevel ? App.getText("Highest Level") : ""}`});
        this.ui.bikeDsc.text = `${GameUtils.getBikeDsc(config)}
${levelDsc}
${bonusDsc}`;
        this.bikeSprite.play();
    }

    onClickCloseDetailButton() {
        this.ui.detailPanel.visible = false;
        this.bikeSprite.stop();
    }

    onTick() {
        let cur = new Date();
        let freeTime = DataMgr.get(DataMgr.nextFreeDrawTime);
        if (cur >= freeTime) {
            this.ui.drawTimeText.text = App.getText("Free");
            this.ui.costDiamondPanel.visible = false;
        } else {
            this.ui.drawTimeText.text = Utils.getCDTimeString(freeTime - cur);
            this.ui.costDiamondPanel.visible = true;
        }
    }
}

DrawScene.sceneFilePath = "myLaya/laya/pages/View/DrawScene.scene.json";
DrawScene.resPathList = BikeSprite.resPathList.concat(Utils.values(Config.drawScene.res));
