import AniItem from "./AniItem";
import GameUtils from "../mgr/GameUtils";
import Config from "../config";

export default class GoldCoin extends AniItem {
    initAni() {
        this.frames = GameUtils.getFrames(Config.goldCoinAniJson);
        this.animationSpeed = 0.25;
        this.isHelpful = true;
    }
}
