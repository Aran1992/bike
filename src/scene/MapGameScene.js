import Config from "../config";
import GameScene from "./GameScene";
import {resources, Sprite, Text, TextStyle, Texture} from "../libs/pixi-wrapper";
import Utils from "../mgr/Utils";
import GameUtils from "../mgr/GameUtils";
import Enemy from "../item/Enemy";
import RunOption from "../../run-option";
import DataMgr from "../mgr/DataMgr";
import SceneHelper from "../mgr/SceneHelper";
import NetworkMgr from "../mgr/NetworkMgr";

export default class MapGameScene extends GameScene {
    onCreate() {
        super.onCreate();
        this.ui.surrenderButton.visible = true;
        this.onClick(this.ui.surrenderButton, this.onClickSurrenderButton.bind(this));
        this.ui.matchRacetrack.visible = true;
    }

    onShow(mapIndex) {
        this.mapIndex = mapIndex;
        this.mapConfig = Config.mapList[mapIndex];
        super.onShow();
    }

    initEnvironment() {
        this.bikeCommonVelocity = this.mapConfig.bikeVelocity || Config.bikeVelocity;
        this.gravity = this.mapConfig.gravity || Config.gravity;
        this.jumpForce = this.mapConfig.jumpForce || Config.jumpForce;
        this.bgTextureList = this.mapConfig.texture.bg;
        this.sideTexture = this.mapConfig.texture.side;
        this.topTexture = this.mapConfig.texture.top;
        this.sideTexture2 = this.mapConfig.texture.side2;
        this.topTexture2 = this.mapConfig.texture.top2;
        this.horizontalParallaxDepth = this.mapConfig.horizontalParallaxDepth;
        this.verticalParallaxDepth = this.mapConfig.verticalParallaxDepth;
        this.bgY = this.mapConfig.bgY || Config.bgY;
        this.bgmPath = this.mapConfig.bgmPath || Config.defaultBgmPath;
        this.bgScale = this.mapConfig.bgScale || Config.defaultBgScale;
    }

    getResPathList() {
        return super.getResPathList()
            .concat(this.mapConfig.texture.bg)
            .concat([
                this.mapConfig.texture.side,
                this.mapConfig.texture.top,
                this.mapConfig.texture.side2,
                this.mapConfig.texture.top2,
                Config.mapBasePath + this.mapConfig.scenePath + ".scene.json",
            ]);
    }

    onLoadedBaseRes() {
        NetworkMgr.requestRandomPlayerInfo(Config.enemy.count, enemyInfoList => {
            this.enemyInfoList = enemyInfoList;
            SceneHelper.loadSceneRes(Config.mapBasePath + this.mapConfig.scenePath + ".scene.json", this.onLoadedGameRes.bind(this));
        });
    }

    onRestart() {
        this.onShow(this.mapIndex);
    }

    initGameContent() {
        let pathList = this.getRoadPathList();

        let lastPath = Utils.getLast(pathList);
        this.finalPoint = {
            x: (lastPath[lastPath.length - 6] + lastPath[lastPath.length - 4]) / 2,
            y: (lastPath[lastPath.length - 5] + lastPath[lastPath.length - 3]) / 2,
        };
        this.finalPointPhysicX = GameUtils.renderPos2PhysicsPos(this.finalPoint).x;

        this.createMap();

        this.createFinalFlag();

        let pp = GameUtils.renderPos2PhysicsPos({x: pathList[0][2] + Config.bikeLeftMargin, y: pathList[0][3]});
        pp.x += Config.bikeRadius;
        pp.y += Config.bikeRadius;
        this.createBike(pp);
        this.createEnemy(pp);
        this.createRacetrackPlayer();
    }

    createBike(pp) {
        super.createBike(pp);
        this.bikeRankText = this.bikeOutterContainer.addChild(new Text("", new TextStyle(Config.bike.rankText.style)));
        this.bikeRankText.anchor.set(0.5, 1);
        this.bikeRankText.position.set(0, Config.bike.rankText.positionY);
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

    getRoadPathList() {
        let json = resources[Config.mapBasePath + this.mapConfig.scenePath + ".scene.json"].data;
        return json.child
            .filter(data => data.label.split("//").find(str => str === "Road"))
            .map(data => {
                let path = data.props.points.split(",").map((intStr, i) => {
                    let value = parseInt(intStr);
                    if (i % 2 === 0) {
                        value += data.props.x;
                    } else {
                        value += data.props.y;
                    }
                    return value;
                });
                let maxY = path[1];
                for (let i = 1; i < path.length; i += 2) {
                    if (path[i] > maxY) {
                        maxY = path[i];
                    }
                }
                let bottomY = maxY + App.sceneHeight / 3 * 2;
                path = [path[0], bottomY].concat(path);
                path = path.concat([path[path.length - 2], bottomY]);
                return path;
            });
    }

    createMap() {
        let json = resources[Config.mapBasePath + this.mapConfig.scenePath + ".scene.json"].data;
        json.child.forEach(data => this.createPart(data));
        this.roadList.sort((a, b) => a.getLeftBorderX() - b.getLeftBorderX());
    }

    createFinalFlag() {
        let sprite = new Sprite(resources[Config.finalFlagImagePath].texture);
        sprite.anchor.set(0.5, 1);
        sprite.scale.set(0.5, 0.5);
        sprite.position.set(this.finalPoint.x, this.finalPoint.y);
        this.underBikeContianer.addChild(sprite);
    }

    syncEnemySprite() {
        this.enemyList.forEach(enemy => enemy.update());
    }

    keepEnemyMove() {
        this.enemyList.forEach(enemy => enemy.afterUpdate());
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

        this.settle();

        if (rank === undefined) {
            rank = this.enemyList.reduce((count, enemy) => {
                if (enemy.completeGame) {
                    return count + 1;
                } else {
                    return count;
                }
            }, 0);
        }

        App.showScene("GameResultScene", {
            rank: rank,
            distance: Math.floor(this.distance),
            coin: this.coin,
            playerNameList: this.getPlayerRankList().map(player => player.getName())
        });
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

    createRacetrackPlayer() {
        for (let i = this.ui.matchRacetrack.children.length - 1; i >= 1; i--) {
            this.ui.matchRacetrack.removeChildAt(i);
        }

        this.racetrackPlayer = this.ui.matchRacetrack.addChild(new Sprite(resources[Config.imagePath.racetrackPlayer].texture));
        this.racetrackPlayer.anchor.set(0.5, 0);
        this.racetrackPlayer.position.set(Config.racetrack.startX, Config.racetrack.startY);

        this.racetrackEnemies = this.enemyList.map((enemy, index) => {
            let image = this.ui.matchRacetrack.addChildAt(new Sprite(resources[Config.imagePath.racetrackEnemy].texture), 1);
            image.anchor.set(0.5, 0);
            image.position.set(Config.racetrack.startX, Config.racetrack.startY - (index + 1) * Config.racetrack.playerYInterval);
            return image;
        });

        this.bikeStartX = this.bikeBody.getPosition().x;
        this.totalDistance = (this.finalPoint.x - this.bikeSprite.x) * Config.pixel2meter;
    }

    updateRacetrackPlayer() {
        this.racetrackPlayer.x = this.calcRacetrackPlayerPositionX(this.bikeBody);
        this.racetrackEnemies.forEach((image, index) => {
            image.x = this.calcRacetrackPlayerPositionX(this.enemyList[index].bikeBody);
        });
    }

    calcRacetrackPlayerPositionX(body) {
        let distance = body.getPosition().x - this.bikeStartX;
        if (distance > this.totalDistance) {
            distance = this.totalDistance;
        }
        return (distance / this.totalDistance) * Config.racetrack.totalLength + Config.racetrack.startX;
    }

    play() {
        super.play();
        this.updateRacetrackPlayer();
        this.updateNextPlayerInfo();
        this.bikeRankText.text = this.getRank(this);
    }

    onDead() {
        super.onDead();
        this.deadCompleteTimer = setTimeout(this.onReborn.bind(this), Config.bike.deadCompleteTime);
    }

    randomEffect(player) {
        let itemRandomTable;
        if (this.mapConfig.itemRandomTableList) {
            let rank = this.getRank(player);
            itemRandomTable = this.mapConfig.itemRandomTableList[rank];
        } else if (this.mapConfig.itemRandomTable) {
            itemRandomTable = this.mapConfig.itemRandomTable;
        } else {
            itemRandomTable = Config.defaultItemRandomTable;
        }
        let weights = [];
        let effects = [];
        for (let effect in itemRandomTable) {
            if (itemRandomTable.hasOwnProperty(effect)) {
                weights.push(itemRandomTable[effect]);
                effects.push(effect);
            }
        }
        return effects[Utils.randomWithWeight(weights)];
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

    isPlayerInScreen(player) {
        return player.bikeOutterContainer.x < Config.designWidth - this.cameraContainer.x;
    }
}
