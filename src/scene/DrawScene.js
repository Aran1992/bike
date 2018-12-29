import Config from "../config";
import Scene from "./Scene";
import Utils from "../mgr/Utils";
import DataMgr from "../mgr/DataMgr";
import {AnimatedSprite, Rectangle, resources, Sprite} from "../libs/pixi-wrapper";
import GameUtils from "../mgr/GameUtils";

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
        let frames = GameUtils.getFrames(Config.bikeAtlasPath);
        this.bikeSprite = new AnimatedSprite(frames);
        this.ui.detailPanel.children[0].addChild(this.bikeSprite);
        this.bikeSprite.anchor.set(0.5, 0.5);
        this.bikeSprite.position.set(307, 100);
        this.bikeDetailSprite = new Sprite();
        this.bikeSprite.addChild(this.bikeDetailSprite);
    }

    onShow() {
        this.ui.diamondText.text = DataMgr.get(DataMgr.diamond, 0);
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
        let index = Utils.randomWithWeight(Config.bikeList.map(item => item.weight));
        this.id = Config.bikeList[index].id;
        let list = DataMgr.get(DataMgr.ownedBikeList, []);
        if (list.indexOf(this.id) === -1) {
            list.push(this.id);
            DataMgr.set(DataMgr.ownedBikeList, list);
        }
        this.startAnimation();
        App.showMask();
    }

    startAnimation() {
        this.ballImage.visible = true;
        this.ballImage.scale.set(0, 0);
        this.ballImage.rotation = 0;
        this.animationFrame = 0;
        this.totalAnimationFrame = 180;
        this.totalRotation = Math.PI * 2 * 6;
        requestAnimationFrame(this.onAnimation.bind(this));
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
            requestAnimationFrame(this.onAnimation.bind(this));
        }
    }

    onAnimationEnded() {
        App.hideMask();
        this.ballImage.visible = false;
        this.ui.detailPanel.visible = true;
        let config = Config.bikeList.find(item => item.id === this.id);
        this.ui.bikeDsc.text = config.dsc;
        let bdSprite = this.bikeDetailSprite;
        if (config.imagePath) {
            bdSprite.texture = resources[config.imagePath].texture;
            bdSprite.anchor.set(...config.anchor);
            bdSprite.position.set(...config.scale);
            bdSprite.scale.set(...config.scale);
        } else {
            bdSprite.texture = undefined;
        }
        this.bikeSprite.play();
    }

    onClickCloseDetailButton() {
        this.ui.detailPanel.visible = false;
        this.bikeSprite.stop();
    }
}

DrawScene.sceneFilePath = "myLaya/laya/pages/View/DrawScene.scene";
DrawScene.resPathList = [Config.bikeAtlasPath].concat(Utils.values(Config.bikeList).map(obj => obj.imagePath));
