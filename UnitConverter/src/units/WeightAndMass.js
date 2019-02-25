import BigNumber from "../libraries/bignumber.js";

class WeightAndMass {
  constructor(unit) {
    this.unit = unit;
  }

  grain = {
    toKilogram() {
      let unit = new BigNumber(this.unit);
      return unit.dividedBy("15432.358").toString();
    },

    toGram() {
      let unit = new BigNumber(this.unit);
      return unit.dividedBy("15.432").toString();
    },

    toMilligram() {
      let unit = new BigNumber(this.unit);
      return unit.multipliedBy("64.799").toString();
    },

    toPound() {
      let unit = new BigNumber(this.unit);
      return unit.dividedBy("7000").toString();
    },

    toOunce() {
      let unit = new BigNumber(this.unit);
      return unit.dividedBy("437.5").toString();
    }
  };
}

export default WeightAndMass;
