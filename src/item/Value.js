export default class Value {
    constructor(basicValue = 0, rate = 1) {
        this.basicValue = basicValue;
        this.rate = rate;
        this.calcFinalValue();
    }

    setBasicValue(value) {
        this.basicValue = value;
        return this.calcFinalValue();
    }

    increaseValueByRate(rate) {
        this.rate += rate;
        return this.calcFinalValue();
    }

    calcFinalValue() {
        this.value = this.basicValue * this.rate;
        return this.value;
    }
}
