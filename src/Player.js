import Bike from "./Bike";

export default class Player extends Bike {
    constructor() {
        super();
        this.emitter = undefined;
    }

    destroy() {
        this.emitter.destroy();
        super.destroy();
    }
}
