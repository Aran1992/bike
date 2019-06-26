import Scene from "./Scene";
import {Graphics, Texture} from "../libs/pixi-wrapper";
import DataMgr from "../mgr/DataMgr";
import Config from "../config";
import BikeSprite from "../item/BikeSprite";
import RunOption from "../../run-option";

export default class PreparationScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        for (let i = 1; i <= 3; i++) {
            this.onClick(this.ui[`advertButton${i}`], () => {
                this.onClickAdvertButton(i);
            });
        }
        this.onClick(this.ui.startButton, this.onClickStartButton.bind(this));
        this.bikeSprite = new BikeSprite(this.ui.itemIcon3, 0);
        this.bikeSprite.play();
    }

    onShow(mode) {
        this.mode = mode;
        this.ui.endlessModeImage.visible = false;
        this.ui.mapModeImage.visible = false;
        if (this.mode === "Map") {
            this.ui.mapModeImage.visible = true;
            this.ui.coinPanel.visible = true;
            this.ui.costCoinText.text = Config.rankMode.costCoin;
            this.rewards = DataMgr.get(DataMgr.preparationDataMap);
        } else {
            this.ui.endlessModeImage.visible = true;
            this.ui.coinPanel.visible = false;
            this.rewards = DataMgr.get(DataMgr.preparationDataEndless);
        }

        this.ui.itemIcon1.children[0].texture = Texture.from(Config.effect[this.rewards[0].effect].imagePath);
        this.ui.itemIcon2.children[0].texture = Texture.from(Config.effect[this.rewards[1].effect].imagePath);
        this.bikeSprite.setBikeID(this.rewards[2].bike);
        for (let i = 1; i <= 3; i++) {
            if (this.rewards[i - 1].received) {
                this.ui[`receivedText${i}`].visible = true;
                this.ui[`advertButton${i}`].visible = false;
            } else {
                this.ui[`receivedText${i}`].visible = false;
                this.ui[`advertButton${i}`].visible = true;
            }
        }
    }

    onClickReturnButton() {
        App.hideScene("PreparationScene");
    }

    onClickAdvertButton(index) {
        window.PlatformHelper.showAd(success => {
            if (success) {
                this.rewards[index - 1].received = true;
                DataMgr.set(DataMgr.preparationData, this.rewards);
                this.onShow(this.mode);
            }
        });
    }

    onClickStartButton() {
        if (this.mode === "Map") {
            let coin = DataMgr.get(DataMgr.coin, 0);
            let costCoin = Config.rankMode.costCoin;
            if (coin >= costCoin) {
                DataMgr.set(DataMgr.coin, coin - costCoin);
                App.hideScene("MainScene");
                App.hideScene("PreparationScene");
                if (RunOption.fixedMapID === undefined || RunOption.fixedMapID === -1) {
                    App.showScene("MapGameScene", DataMgr.get(DataMgr.currentMapScene), this.rewards);
                } else {
                    App.showScene("MapGameScene", RunOption.fixedMapID, this.rewards);
                }
            } else {
                App.showNotice(App.getText("Gold Coin is not enough!"));
            }
        } else if (this.mode === "Endless") {
            App.hideScene("MainScene");
            App.hideScene("PreparationScene");
            App.showScene("EndlessGameScene", DataMgr.get(DataMgr.selectedEndlessScene, 0), this.rewards);
        }
    }
}

PreparationScene.sceneFilePath = "myLaya/laya/pages/View/PreparationScene.scene.json";
