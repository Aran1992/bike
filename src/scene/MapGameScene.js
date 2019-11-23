import Config from "../config";
import {resources, Sprite, Texture} from "../libs/pixi-wrapper";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import Enemy from "../item/Enemy";
import RunOption from "../../run-option";
import DataMgr from "../mgr/DataMgr";
import NetworkMgr from "../mgr/NetworkMgr";
import StaticGameScene from "./StaticGameScene";
import MusicMgr from "../mgr/MusicMgr";

export default class MapGameScene extends StaticGameScene {
    onCreate() {
        super.onCreate();
        this.rewardType = DataMgr.preparationDataMap;
        this.ui.surrenderButton.visible = true;
        this.onClick(this.ui.surrenderButton, this.onClickSurrenderButton.bind(this));
        this.enemyCount = Config.enemy.count;
    }

    onShow(mapIndex) {
        this.mapIndex = mapIndex;
        this.mapConfig = Config.mapList[mapIndex];
        this.mapScenePath = Config.mapBasePath + this.mapConfig.scenePath + ".scene.json";
        super.onShow();
        TDGA.onEvent("竞技模式");
    }

    onLoadedGameRes() {
        NetworkMgr.requestRandomPlayerInfo(Config.enemy.count, enemyInfoList => {
            this.enemyInfoList = enemyInfoList;
            super.onLoadedGameRes();
        });
        MusicMgr.playSound(Config.soundPath.guideStartGo, () => {
            MusicMgr.playBGM(this.bgmPath, true);
        });
    }

    onRestart() {
        this.onShow(this.mapIndex);
    }

    initGameContent() {
        super.initGameContent();
        this.createEnemy(this.bikeStarPos);
        this.bikeRankText = this.bikeOutterContainer.addChild(new Sprite(resources[Config.imagePath.rankText]));
        this.bikeRankText.anchor.set(0.5, 0.5);
        this.bikeRankText.position.set(Config.bike.rankText.positionX, Config.bike.rankText.positionY);
    }

    createEnemy(pp) {
        this.enemyList = [];
        if (!RunOption.removeAllEnemy) {
            let frames = GameUtils.getFrames(Config.bikeAtlasPath, "enemy");
            let list = JSON.parse(JSON.stringify(Config.bikeList));
            for (let i = 0; i < Config.enemy.count; i++) {
                let id = Utils.randomChoose(list).id;
                let index = list.findIndex(item => item.id === id);
                list.splice(index, 1);
                // let id = DataMgr.get(DataMgr.selectedBike, 0);
                // let id = 2;
                let playername = `NPC${i + 1}`;
                let headurl = Config.defaultEnemyHeadImagePath;
                let item = this.enemyInfoList.pop();
                if (item) {
                    playername = item.playername;
                    headurl = item.headurl;
                }
                let enemy = new Enemy(this, this.bikeContainer, this.world, id, {
                    commonVelocity: this.bikeCommonVelocity,
                    jumpForce: this.jumpForce,
                    frames: frames,
                    playername: playername,
                    headurl: headurl,
                });
                enemy.setPhysicalPosition(pp);
                this.enemyList.push(enemy);
            }
        }
    }

    syncEnemySprite() {
        this.enemyList.forEach(enemy => enemy.update());
    }

    keepEnemyMove() {
        this.enemyList.forEach(enemy => enemy.afterUpdate());
    }

    onClickSurrenderButton() {
        App.showScene("TipScene", {
            tip: App.getText("You only get the last prize after surrender, are you sure?"),
            confirmCallback: () => {
                this.gameWin(Config.enemy.count);
            },
            cancelCallback: () => {
            },
        });
    }

    play() {
        super.play();
        this.updateNextPlayerInfo();
        this.bikeRankText.texture = Texture.from(Config.imagePath[`rankText${this.getRank(this)}`]);
    }

    getItemRandomTableList(player) {
        if (this.mapConfig.itemRandomTableList) {
            let rank = this.getRank(player);
            return this.mapConfig.itemRandomTableList[rank];
        } else if (this.mapConfig.itemRandomTable) {
            return this.mapConfig.itemRandomTable;
        } else {
            return Config.defaultItemRandomTable;
        }
    }

    updateNextPlayerInfo() {
        let nextPlayer = this.getFormerOne(this);
        if (nextPlayer && !this.isPlayerInScreen(nextPlayer)) {
            this.ui.nextPlayerInfo.visible = true;
            this.ui.nextPlayerName.text = nextPlayer.getName();
            let playerX = this.bikeBody.getPosition().x;
            let nextPlayerX = nextPlayer.bikeBody.getPosition().x;
            let finalX = this.finalPointPhysicX;
            let distance;
            if (nextPlayerX > finalX) {
                distance = finalX - playerX;
            } else {
                distance = nextPlayerX - playerX;
            }
            this.ui.nextPlayerDistance.text = Math.ceil(distance) + "m";
            this.ui.nextPlayerHead.children[0].texture = Texture.from(nextPlayer.getHead());
        } else {
            this.ui.nextPlayerInfo.visible = false;
        }
    }

    settle() {
        super.settle();
        DataMgr.refreshPreparationRewards(DataMgr.preparationDataMap);
        DataMgr.add(DataMgr.mapGameTimes, 1);
    }

    gameWin(rank) {
        this.gameStatus = "win";

        let id = Math.floor(Math.random() * Config.mapList.length);
        if (id === DataMgr.get(DataMgr.currentMapScene)) {
            id = id + 1;
            if (Config.mapList[id] === undefined) {
                id = 0;
            }
        }
        DataMgr.set(DataMgr.currentMapScene, id);

        let playerNameList = [];
        if (rank === undefined) {
            rank = this.enemyList.reduce((count, enemy) => {
                if (enemy.completeGame) {
                    return count + 1;
                } else {
                    return count;
                }
            }, 0);
            playerNameList = this.getPlayerRankList().map(player => player.getName());
        } else {
            let players = [].concat(this.enemyList);
            players.sort((a, b) => b.getBikePhysicalPosition().x - a.getBikePhysicalPosition().x);
            playerNameList = players.concat([this]).map(player => player.getName());
        }

        this.rank = rank;

        App.showScene("GameResultScene", {
            rank: rank,
            distance: Math.floor(this.distance),
            coin: this.coin,
            playerNameList: playerNameList,
            gameScene: this,
        });
    }

    onDead() {
        super.onDead();
        this.deadCompleteTimer = setTimeout(this.onReborn.bind(this), Config.bike.deadCompleteTime);
    }
}
