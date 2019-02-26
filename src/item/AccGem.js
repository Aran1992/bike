import AniItem from "./AniItem";
import Config from "../config";
import GameUtils from "../mgr/GameUtils";

export default class AccGem extends AniItem {
    initAni() {
        this.frames = GameUtils.getFrames(Config.accGemAniJson);
        this.animationSpeed = 0.25;
        this.effect = "Accelerate";
    }
}
