import DataMgr from "./DataMgr";
import Config from "../config";

class OnlineMgr_ {
    start() {
        this.startGiftCountDown();
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
}

const OnlineMgr = new OnlineMgr_();

export default OnlineMgr;
