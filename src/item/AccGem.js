import AniItem from "./AniItem";
import {Texture} from "../libs/pixi-wrapper";

export default class AccGem extends AniItem {
    initAni() {
        let frames = [];
        for (let i = 0; i < 12; i++) {
            frames.push(Texture.fromFrame(`crystal_jet_${i < 10 ? "0" + i : i}.png`));
        }
        this.frames = frames;
        this.animationSpeed = 0.25;
    }
}
