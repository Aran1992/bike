import Scene from "./Scene";
import {Graphics} from "../libs/pixi-wrapper";
import BikeSprite from "../item/BikeSprite";
import Config from "../config";
import DataMgr from "../mgr/DataMgr";
import GameUtils from "../mgr/GameUtils";

export default class BikeDetailScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));

        let detailPanel = this.ui.detailPanel.children[0];
        this.bikeSprite = new BikeSprite(detailPanel);
        this.bikeSprite.setPosition(detailPanel.mywidth / 2, Config.drawScene.bikeSprite.y);
    }

    onShow(id, levelUp, highestLevel) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        this.bikeSprite.setBikeID(id);
        this.bikeSprite.play();

        this.ui.unlockIcon.visible = !levelUp;
        this.ui.levelUpIcon.visible = levelUp;

        let level = DataMgr.get(DataMgr.bikeLevelMap, {})[id];
        let config = Config.bikeList.find(item => item.id === id);
        let bonusDsc = App.getText("BonusDsc", {
            coin: Math.floor(GameUtils.getBikeConfig("coinPercent", id, level,) * 100) + "%",
            distance: Math.floor(GameUtils.getBikeConfig("distancePercent", id, level,) * 100) + "%",
            score: Math.floor(GameUtils.getBikeConfig("scorePercent", id, level,) * 100) + "%",
            exp: Math.floor(GameUtils.getBikeConfig("expPercent", id, level,) * 100) + "%",
        });
        let levelDsc = App.getText("LevelDsc2", {level: `${level + 1} ${highestLevel ? App.getText("Highest Level") : ""}`});
        this.ui.bikeDsc.text = `${GameUtils.getBikeDsc(config)}
${levelDsc}
${bonusDsc}`;
    }

    onClickReturnButton() {
        App.hideScene("BikeDetailScene");
        this.bikeSprite.stop();
    }
}

BikeDetailScene.sceneFilePath = "myLaya/laya/pages/View/BikeDetailScene.scene.json";
