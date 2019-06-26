import DataMgr from "./DataMgr";
import Config from "../config";

class OnlineMgr_ {
    start() {
        this.startGiftCountDown();
        this.startResetRewardTimer();
    }

    restartGiftCountDown() {
        let giftIndex = DataMgr.get(DataMgr.giftIndex, 0);
        let gift = Config.giftList[giftIndex];
        if (gift) {
            DataMgr.set(DataMgr.remainGiftOnlineMinutes, gift.onlineMinutes);
            this.startGiftCountDown();
        }
    }

    startGiftCountDown() {
        let giftIndex = DataMgr.get(DataMgr.giftIndex, 0);
        let gift = Config.giftList[giftIndex];
        if (gift) {
            this.giftRemainTime = DataMgr.get(DataMgr.remainGiftOnlineMinutes, 0) * 60;
            if (this.giftRemainTime !== 0) {
                this.giftCountDownTimer = setInterval(() => {
                    this.giftRemainTime--;
                    let oldMinutes = DataMgr.get(DataMgr.remainGiftOnlineMinutes, 0);
                    let newMinutes = Math.ceil(this.giftRemainTime / 60);
                    if (oldMinutes !== newMinutes) {
                        DataMgr.set(DataMgr.remainGiftOnlineMinutes, newMinutes);
                    }
                    if (this.giftRemainTime === 0) {
                        clearInterval(this.giftCountDownTimer);
                    }
                }, 1000);
            }
        }
    }

    getGiftRemainTime() {
        return this.giftRemainTime;
    }

    hasGift() {
        let giftIndex = DataMgr.get(DataMgr.giftIndex, 0);
        let gift = Config.giftList[giftIndex];
        return gift !== undefined;
    }

    startResetRewardTimer() {
        this.setResetRewardHour();
        setInterval(() => {
            if (new Date().getTime() >= this.resetRewardTime) {
                this.setResetRewardHour();
                DataMgr.set(DataMgr.giftIndex, 0);
                DataMgr.set(DataMgr.remainGiftOnlineMinutes, Config.giftList[0].onlineMinutes);
                this.startGiftCountDown();
            }
        }, 1000);
    }

    setResetRewardHour() {
        let cur = new Date();
        cur.setSeconds(0);
        cur.setMinutes(0);
        cur.setMilliseconds(0);
        if (cur.getHours() >= Config.resetRewardHour) {
            cur.setHours(Config.resetRewardHour);
            this.resetRewardTime = cur.getTime() + 24 * 60 * 60 * 1000;
        } else {
            cur.setHours(Config.resetRewardHour);
            this.resetRewardTime = cur.getTime();
        }
    }
}

const OnlineMgr = new OnlineMgr_();

export default OnlineMgr;
