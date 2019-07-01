import Scene from "./Scene";
import {Graphics, resources} from "../libs/pixi-wrapper";
import BikeSprite from "../item/BikeSprite";
import Utils from "../mgr/Utils";
import Config from "../config";

export default class LoadingScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(parseInt(`0x${resources[LoadingScene.sceneFilePath].data.props.sceneColor.substring(1)}`), 1)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);
        this.curPercent = 0;
        this.goToPercent(0);
        this.bikeSprite = new BikeSprite(this);
    }

    onShow(bikeID) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);
        this.goToPercent(0);
        this.timer = requestAnimationFrame(this.onAnimationFrame.bind(this));
        this.bikeSprite.setBikeID(bikeID);
        this.bikeSprite.play();
        this.ui.tipText.text = App.getText(`Tip${Math.floor(Utils.randomInRange(1, Config.tipCount + 1))}`);
    }

    onHide() {
        cancelAnimationFrame(this.timer);
        this.bikeSprite.stop();
    }

    goToPercent(percent) {
        this.targetPercent = percent;
    }

    setPercent(percent) {
        this.ui.percentText.text = `${Math.floor(percent)}%`;
        let graphics = new Graphics();
        graphics.beginFill();
        let pos = this.ui.percentImage.getGlobalPosition();
        let width = this.ui.percentImage.width * percent / 100;
        graphics.drawRect(
            pos.x,
            pos.y,
            width,
            this.ui.percentImage.height
        );
        graphics.endFill();
        this.ui.percentImage.mask = graphics;
        console.log(App.realWidth, App.sceneWidth);
        this.bikeSprite.setPosition(pos.x + width - (App.realWidth - App.sceneWidth) / 2, pos.y);
    }

    onAnimationFrame() {
        this.curPercent++;
        if (this.curPercent > this.targetPercent) {
            this.curPercent = this.targetPercent;
        }
        this.setPercent(this.curPercent);
        this.timer = requestAnimationFrame(this.onAnimationFrame.bind(this));
    }
}

LoadingScene.sceneFilePath = "myLaya/laya/pages/View/LoadingScene.scene.json";
