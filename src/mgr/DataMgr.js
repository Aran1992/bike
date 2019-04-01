import Config from "../config";

class DataMgr_ {
    constructor() {
        if (localStorage[window.location.href]) {
            this.dataTable = JSON.parse(localStorage[window.location.href]);
        } else {
            this.dataTable = {};
        }
        this.conditionTable = {
            //需消费 #### 数量的金币
            1: value => DataMgr.get(DataMgr.costCoin, 0) >= value,
            //需消费 #### 数量的钻石
            2: value => DataMgr.get(DataMgr.costDiamond, 0) >= value,
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

    set(key, value) {
        let oldValue = this.dataTable[key];
        this.dataTable[key] = value;
        localStorage[window.location.href] = JSON.stringify(this.dataTable);
        if (key === DataMgr.coin && value < oldValue) {
            this.set(DataMgr.costCoin, this.get(DataMgr.costCoin, 0) + (oldValue - value));
            this.checkConditions(Config.conditionsEnum.costCoin);
        } else if (key === DataMgr.diamond && value < oldValue) {
            this.set(DataMgr.costDiamond, this.get(DataMgr.costDiamond, 0) + (oldValue - value));
            this.checkConditions(Config.conditionsEnum.costDiamond);
        } else if (key === DataMgr.unlockAllEndlessScene
            || key === DataMgr.unlockEndlessSceneIDList
            || key === DataMgr.distance) {
            this.checkConditions(Config.conditionsEnum.unlockMap);
        } else if (key === DataMgr.distance) {
            this.checkConditions(Config.conditionsEnum.distance);
        } else if (key === DataMgr.distanceRecord) {
            this.checkConditions(Config.conditionsEnum.distanceRecord);
        } else if (key === DataMgr.totalScore) {
            this.checkConditions(Config.conditionsEnum.totalScore);
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

DataMgr.selectedEndlessScene = "selectedEndlessScene";
DataMgr.distance = "distance";
DataMgr.diamond = "diamond";
DataMgr.coin = "coin";
DataMgr.totalScore = "totalScore";
DataMgr.currentMapScene = "currentMapScene";
DataMgr.selectedBike = "selectedBike";
DataMgr.ownedBikeList = "ownedBikeList";
DataMgr.nextFreeDrawTime = "nextFreeDrawTime";
DataMgr.hasBuyPresentIDList = "hasBuyPresentIDList";
DataMgr.unlockAllBike = "unlockAllBike";
DataMgr.unlockAllEndlessScene = "unlockAllEndlessScene";
DataMgr.unlockEndlessSceneIDList = "unlockEndlessSceneIDList";
DataMgr.bgmOn = "bgmOn";
DataMgr.soundOn = "soundOn";
DataMgr.distanceRecord = "distanceRecord";
DataMgr.bikeLevelMap = "bikeLevelMap";
DataMgr.homeData = "homeData";
DataMgr.costCoin = "costCoin";
DataMgr.costDiamond = "costDiamond";

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
export default DataMgr;
