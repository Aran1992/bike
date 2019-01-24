import Config from "../config";
import Scene from "./Scene";
import Utils from "../mgr/Utils";
import DataMgr from "../mgr/DataMgr";
import {Rectangle} from "../libs/pixi-wrapper";
import BikeSprite from "../item/BikeSprite";

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
        this.bikeSprite = new BikeSprite(this.ui.detailPanel.children[0]);
        this.bikeSprite.setPosition(307, 100);
        this.onTick();
        this.timer = setInterval(this.onTick.bind(this), 1000);
    }

    onShow() {
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
        this.ui.costDiamondText.text = Config.diamondDrawCost;
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
                diamond -= Config.diamondDrawCost;
                DataMgr.set(DataMgr.diamond, diamond);
                this.ui.diamondText.text = diamond;
                this.startAnimation();
            } else {
                App.showNotice("Diamond is not enough!");
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
        App.hideMask();

        cancelAnimationFrame(this.animationID);

        let index = Utils.randomWithWeight(Config.bikeList.map(item => item.weight));
        this.id = Config.bikeList[index].id;
        let list = DataMgr.get(DataMgr.ownedBikeList, []);
        if (list.indexOf(this.id) === -1) {
            list.push(this.id);
            DataMgr.set(DataMgr.ownedBikeList, list);
        }
        let nextTime = (new Date()).getTime() + Config.freeDrawInterval * 1000;
        DataMgr.set(DataMgr.nextFreeDrawTime, nextTime);

        this.ballImage.visible = false;
        this.ui.detailPanel.visible = true;
        this.bikeSprite.setBikeID(this.id);
        let config = Config.bikeList.find(item => item.id === this.id);
        this.ui.bikeDsc.text = config.dsc;
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
            this.ui.drawTimeText.text = "Free";
            this.ui.costDiamondPanel.visible = false;
        } else {
            this.ui.drawTimeText.text = Utils.getCDTimeString(freeTime - cur);
            this.ui.costDiamondPanel.visible = true;
        }
    }
}

DrawScene.sceneFilePath = "myLaya/laya/pages/View/DrawScene.scene";
DrawScene.resPathList = BikeSprite.resPathList;
