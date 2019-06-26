import Scene from "./Scene";
import {Sprite, Texture} from "../libs/pixi-wrapper";
import UIHelper from "../ui/UIHelper";

export default class PrizeScene extends Scene {
    onCreate() {
        this.onClick(this.ui.returnButton, this.onClickReturnButton.bind(this));
        this.list = [];
        this.list.push(this.ui.item);
        for (let i = 0; i < 2; i++) {
            let item = UIHelper.clone(this.ui.item);
            this.ui.list.addChild(item);
            this.list.push(item);
        }
        this.list.forEach(item => {
            item.itemIcon = item.children[0].children[0].children[1].addChild(new Sprite());
            item.numberText = item.children[0].children[0].children[2];
        });
    }

    onShow(rewards) {
        this.list.forEach(item => {
            item.itemIcon.visible = false;
            item.numberText.visible = false;
            item.visible = false;
        });
        rewards.forEach((reward, i) => {
            let item = this.list[i];
            item.visible = true;
            let itemIcon = item.itemIcon;
            let numberText = item.numberText;
            if (reward.rewardCoin) {
                itemIcon.visible = true;
                numberText.visible = true;
                itemIcon.texture = Texture.from("myLaya/laya/assets/images/icon-diamond.png");
                numberText.text = reward.rewardCoin;
            } else if (reward.rewardDiamond) {
                itemIcon.visible = true;
                numberText.visible = true;
                itemIcon.texture = Texture.from("myLaya/laya/assets/images/icon-coin.png");
                numberText.text = reward.rewardDiamond;
            }
        });
        switch (rewards.length) {
            case 1: {
                this.list[0].x = this.ui.list.mywidth / 2;
                break;
            }
            case 2: {
                this.list[0].x = this.ui.list.mywidth / 3;
                this.list[1].x = this.ui.list.mywidth / 3 * 2;
                break;
            }
            case 3: {
                let itemWidth = this.list[0].mywidth;
                this.list.forEach((item, i) => {
                    item.x = itemWidth / 2 + i * itemWidth;
                });
                break;
            }
        }
    }

    onClickReturnButton() {
        App.hideScene("PrizeScene");
    }
}

PrizeScene.sceneFilePath = "myLaya/laya/pages/View/PrizeScene.scene.json";
