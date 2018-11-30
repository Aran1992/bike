import AniItem from "./AniItem";
import {Texture} from "../libs/pixi-wrapper";

export default class GoldCoin extends AniItem {
    initAni() {
        let frames = [];
        for (let i = 0; i < 12; i++) {
            frames.push(Texture.fromFrame(`medal_${i < 10 ? "0" + i : i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }
}
