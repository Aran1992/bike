import Scene from "./Scene";
import DataMgr from "../mgr/DataMgr";
import List from "../ui/List";
import Config from "../config";
import MusicMgr from "../mgr/MusicMgr";
import {Graphics} from "../libs/pixi-wrapper";

export default class GameResultScene extends Scene {
    onCreate() {
        let mask = new Graphics()
            .beginFill(0x000000, 0.5)
            .drawRect(0, 0, App.sceneWidth, App.sceneHeight)
            .endFill();
        this.addChildAt(mask, 0);

        this.onClick(this.ui.mainButton, GameResultScene.onClickMainButton);
    }

    onShow(args) {
        this.parent.setChildIndex(this, this.parent.children.length - 1);

        MusicMgr.pauseBGM();
        MusicMgr.playSound(Config.soundPath.throughFlag);

        this.args = args;
        let id = DataMgr.get(DataMgr.selectedBike, 0);
        this.bikeConfig = Config.bikeList.find(bike => bike.id === id);

        let playerName = "{{YourselfName}}";
        let thisGameScore = Config.rankScore[this.args.rank] * (this.bikeConfig.scorePercent || 1);
        let totalScore = DataMgr.get(DataMgr.totalScore, 0) + thisGameScore;
        DataMgr.set(DataMgr.totalScore, totalScore);
        this.ui.totalScoreText.text = `${playerName} current total score: ${totalScore}`;

        if (this.resultList === undefined) {
            this.resultList = new List({
                root: this.ui.resultList,
                updateItemFunc: this.updateResultItem.bind(this),
                count: 3,
                isStatic: true,
            });
        } else {
            this.resultList.refresh();
        }

        if (this.rankList === undefined) {
            this.rankList = new List({
                root: this.ui.rankList,
                updateItemFunc: this.updateRankItem.bind(this),
                count: Config.enemy.count + 1,
                isStatic: true,
            });
        } else {
            this.rankList.refresh();
        }
    }

    static onClickMainButton() {
        App.hideScene("GameResultScene");
        App.destroyScene("MapGameScene");
        App.showScene("MainScene");
    }

    updateResultItem(item, index) {
        let name = "";
        let originValue = 0;
        let multiple = 0;
        switch (index) {
            case 0: {
                name = "Score";
                originValue = Config.rankScore[this.args.rank];
                multiple = this.bikeConfig.scorePercent || 1;
                break;
            }
            case 1: {
                name = "Distance";
                originValue = Math.floor(this.args.distance);
                multiple = this.bikeConfig.distancePercent || 1;
                break;
            }
            case 2: {
                name = "Coin";
                originValue = this.args.coin;
                multiple = this.bikeConfig.coinPercent || 1;
                break;
            }
        }
        item.children[0].text = `${name}\t${originValue}`;
        item.children[1].text = `*${multiple}->`;
        item.children[2].text = `${name}\t${Math.floor(originValue * multiple)}`;
    }

    updateRankItem(item, index) {
        let rank = "";
        let name = index === this.args.rank ? "YourselfName" : "{{PlayerName}}";
        let value = Config.rankScore[index] || 0;
        switch (index) {
            case 0: {
                rank = "1st";
                break;
            }
            case 1: {
                rank = "2nd";
                break;
            }
            case 2: {
                rank = "3rd";
                break;
            }
            default: {
                rank = `${index + 1}th`;
            }
        }
        item.children[0].text = rank;
        item.children[1].text = name;
        item.children[2].text = "Score";
        item.children[3].text = value;
    }
}

GameResultScene.sceneFilePath = "myLaya/laya/pages/View/GameResultScene.scene";
