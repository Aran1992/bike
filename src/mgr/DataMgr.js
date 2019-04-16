import Config from "../config";
import NetworkMgr from "./NetworkMgr";

class DataMgr_ {
    constructor() {
        this.conditionTable = {
            //需消费 #### 数量的金币
            1: () => false,
            //需消费 #### 数量的钻石
            2: () => false,
            //需要解锁地图 ####
            3: id => !DataMgr.isEndlessSceneLocked(id),
            //需要总里程达到 ####
            4: value => DataMgr.get(DataMgr.distance, 0) >= value,
            //需要最远里程达到过 ####
            5: value => DataMgr.get(DataMgr.distanceRecord, 0) >= value,
            //需要积分达到过 ####
            6: value => DataMgr.get(DataMgr.totalScore, 0) > value,
            //需要总里程排名达到过第 #### 名
            7: value => this.data.totalMileageBoardBestRanking !== 0 && this.data.totalMileageBoardBestRanking <= value,
            //需要最远里程排名达到过第 #### 名
            8: value => this.data.farestMileageBoardBestRanking !== 0 && this.data.farestMileageBoardBestRanking <= value,
            //需要积分排名达到过第 #### 名
            9: value => this.data.scoreBoardBestRanking !== 0 && this.data.scoreBoardBestRanking <= value,
        };
    }

    // todo
    // 但是排行榜刷新之后需要重新刷新这个东西
    // 这个时候又要去获取一下数据 然后来刷新一下这个东西

    setData(data) {
        this.data = data;
    }

    init(dataTable, periodIdx) {
        this.dataTable = dataTable;

        if (DataMgr.get(DataMgr.periodIdx) !== periodIdx) {
            this.resetRankData(periodIdx);
        }

        setInterval(() => {
            if (new Date().getTime() > DataMgr.get(DataMgr.nextRankRefreshTime)) {
                this.resetRankData();
            }
        }, 1000);

        if (DataMgr.get(DataMgr.ownedBikeList, []).length === 0) {
            DataMgr.set(DataMgr.ownedBikeList, [0]);
        }
        let bikeLevelMap = DataMgr.get(DataMgr.bikeLevelMap, {});
        DataMgr.get(DataMgr.ownedBikeList, []).forEach(id => {
            if (bikeLevelMap[id] === undefined) {
                bikeLevelMap[id] = 0;
            }
        });
        DataMgr.set(DataMgr.bikeLevelMap, bikeLevelMap);
        if (DataMgr.get(DataMgr.selectedBike) === undefined) {
            DataMgr.set(DataMgr.selectedBike, 0);
        }
        if (DataMgr.get(DataMgr.nextFreeDrawTime) === undefined) {
            DataMgr.set(DataMgr.nextFreeDrawTime, (new Date()).getTime());
        }
        if (DataMgr.get(DataMgr.currentMapScene) === undefined) {
            DataMgr.set(DataMgr.currentMapScene, Math.floor(Math.random() * Config.mapList.length));
        }
        if (DataMgr.get(DataMgr.homeData) === undefined) {
            DataMgr.set(DataMgr.homeData, {
                bgID: 1,
                floorID: 1,
                spoilsList: [],
                spoilsLength: 0,
                petsList: [],
                unlocked: {
                    backgrounds: [],
                    floors: [],
                    spoils: [],
                    pets: [],
                }
            });
        }
    }

    set(key, value) {
        this.dataTable[key] = value;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => NetworkMgr.requestSaveData(this.dataTable), 100);
        if (key === DataMgr.unlockAllEndlessScene
            || key === DataMgr.unlockEndlessSceneIDList
            || key === DataMgr.distance) {
            this.checkConditions(Config.conditionsEnum.unlockMap);
        }
        if (key === DataMgr.distance) {
            this.checkConditions(Config.conditionsEnum.distance);
        }
        if (key === DataMgr.distanceRecord) {
            this.checkConditions(Config.conditionsEnum.distanceRecord);
        }
        if (key === DataMgr.totalScore) {
            this.checkConditions(Config.conditionsEnum.totalScore);
        }
        if (key === DataMgr.homeData) {
            NetworkMgr.requestSaveSocialData({home: value});
        }
        if (key === DataMgr.rankDistance && value !== 0) {
            NetworkMgr.requestUpdateTotalMileage(value);
        }
        if (key === DataMgr.rankDistanceRecord && value !== 0) {
            NetworkMgr.requestUpdateFarthestMileage(value);
        }
        if (key === DataMgr.rankTotalScore && value !== 0) {
            NetworkMgr.requestUpdateScore(value);
        }
    }

    add(key, addValue) {
        let value = this.get(key, 0) + addValue;
        this.set(key, value);
        return value;
    }

    get(key, defaultValue) {
        let value = this.dataTable[key];
        if (value === undefined) {
            value = defaultValue;
        }
        return value;
    }

    isHomeItemLocked(type, id) {
        let unlockConditions = Config.home[type].find(item => item.id === id).unlockConditions;
        if (unlockConditions
            && unlockConditions.length !== 0
            && DataMgr.get(DataMgr.homeData).unlocked[type].indexOf(id) === -1) {
            return true;
        }
    }

    isHomeItemSatisfiedCostCondition(type, id) {
        let unlockConditions = Config.home[type].find(item => item.id === id).unlockConditions;
        if (!unlockConditions
            .filter(condition => [Config.conditionsEnum.costCoin, Config.conditionsEnum.costDiamond].indexOf(condition[0]) === -1)
            .some(condition => !this.checkCondition(...condition))) {
            return true;
        }
    }

    checkCondition(id, ...args) {
        return this.conditionTable[id](...args);
    }

    checkConditions(conditionID) {
        Config.home.types.forEach(type => {
            Config.home[type].forEach(item => {
                if (DataMgr.isHomeItemLocked(type, item.id)
                    && item.unlockConditions
                    && item.unlockConditions.find(([id]) => id === conditionID)) {
                    if (!item.unlockConditions.some(list => !this.checkCondition(...list))) {
                        let data = DataMgr.get(DataMgr.homeData);
                        data.unlocked[type].push(item.id);
                        DataMgr.set(DataMgr.homeData, data);
                    }
                }
            });
        });
    }

    isEndlessSceneLocked(id) {
        return DataMgr.get(DataMgr.unlockAllEndlessScene, false) === false
            && DataMgr.get(DataMgr.unlockEndlessSceneIDList, []).indexOf(id) === -1
            && DataMgr.get(DataMgr.distance, 0)
            < Config.endlessMode.sceneList.find(item => item.id === id).unlockDistance;
    }

    resetRankData(periodIdx = DataMgr.get(DataMgr.periodIdx) + 1) {
        DataMgr.set(DataMgr.rankDistance, 0);
        DataMgr.set(DataMgr.rankDistanceRecord, 0);
        DataMgr.set(DataMgr.rankTotalScore, 0);
        DataMgr.set(DataMgr.periodIdx, periodIdx);
        let cur = new Date().getTime();
        let start = Config.rankStartTime.getTime();
        let interval = Config.rankRefreshInterval * 1000;
        let refreshTime = start + Math.ceil((cur - start) / interval) * interval;
        DataMgr.set(DataMgr.nextRankRefreshTime, refreshTime);
    }
}

const DataMgr = new DataMgr_();

DataMgr.selectedEndlessScene = "0";
// 整个游戏历史累计的里程
DataMgr.distance = "1";
DataMgr.diamond = "2";
DataMgr.coin = "3";
// 整个游戏历史累计的总分
DataMgr.totalScore = "4";
DataMgr.currentMapScene = "5";
DataMgr.selectedBike = "6";
DataMgr.ownedBikeList = "7";
DataMgr.nextFreeDrawTime = "8";
DataMgr.hasBuyPresentIDList = "9";
DataMgr.unlockAllBike = "10";
DataMgr.unlockAllEndlessScene = "11";
DataMgr.unlockEndlessSceneIDList = "12";
DataMgr.bgmOn = "13";
DataMgr.soundOn = "14";
// 整个游戏历史最好的单次最远距离
DataMgr.distanceRecord = "15";
DataMgr.bikeLevelMap = "16";
DataMgr.homeData = "17";
DataMgr.costCoin = "18";
DataMgr.costDiamond = "19";
DataMgr.nextRankRefreshTime = "20";
// 本次排行累计的里程
DataMgr.rankDistance = "21";
// 本次排行最好的单次最远距离
DataMgr.rankDistanceRecord = "22";
// 本次排行累计的总分
DataMgr.rankTotalScore = "23";
DataMgr.periodIdx = "24";

export default DataMgr;
