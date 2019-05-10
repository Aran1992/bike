import BaseEffect from "./BaseEffect";

export default class BikeEffect extends BaseEffect {
    constructor(bike, effectPath, animationEndCallback) {
        super(effectPath, animationEndCallback);
        bike.addBikeChild(this.sprite, this.index);
    }
}
