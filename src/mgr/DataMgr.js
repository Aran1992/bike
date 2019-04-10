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
            7: () => false,
            //需要最远里程排名达到过第 #### 名
            8: () => false,
            //需要积分排名达到过第 #### 名
            9: () => false,
        };
    }

    init(dataTable) {
        this.dataTable = dataTable;
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
        } else if (key === DataMgr.distance) {
            NetworkMgr.requestUpdateTotalMileage(value);
            this.checkConditions(Config.conditionsEnum.distance);
        } else if (key === DataMgr.distanceRecord) {
            NetworkMgr.requestUpdateFarthestMileage(value);
            this.checkConditions(Config.conditionsEnum.distanceRecord);
        } else if (key === DataMgr.totalScore) {
            NetworkMgr.requestUpdateScore(value);
            this.checkConditions(Config.conditionsEnum.totalScore);
        } else if (key === DataMgr.homeData) {
            NetworkMgr.requestSaveSocialData({home: value});
        }
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
}

const DataMgr = new DataMgr_();

DataMgr.selectedEndlessScene = "0";
DataMgr.distance = "1";
DataMgr.diamond = "2";
DataMgr.coin = "3";
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
DataMgr.distanceRecord = "15";
DataMgr.bikeLevelMap = "16";
DataMgr.homeData = "17";
DataMgr.costCoin = "18";
DataMgr.costDiamond = "19";

export default DataMgr;
