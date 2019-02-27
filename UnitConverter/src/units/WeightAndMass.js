import BigNumber from "../libraries/bignumber.js";

let UNIT;

class WeightAndMass {
  constructor(unit) {
    UNIT = unit;
  }

  grain = {
    toKilogram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("15432.358").toString();
    },

    toGram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("15.432").toString();
    },

    toMilligram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("64.799").toString();
    },

    toPound() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("7000").toString();
    },

    toOunce() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("437.5").toString();
    }
  };

  kilogram = {
    toGram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("1000").toString();
    },

    toMilligram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("1e+6").toString();
    },

    toPound() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("2.205").toString();
    },

    toOunce() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("35.274").toString();
    },

    toGrain() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("15432.358").toString();
    }
  };

  gram = {
    toMilligram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("1000").toString();
    },

    toPound() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("453.592").toString();
    },

    toOunce() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("28.35").toString();
    },

    toGrain() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("15.432").toString();
    },

    toKilogram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("1000").toString();
    }
  };

  milligram = {
    toPound() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("453592.37").toString();
    },

    toOunce() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("28349.523").toString();
    },

    toGrain() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("64.799").toString();
    },

    toKilogram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("1e+6").toString();
    },

    toGram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("1000").toString();
    }
  };

  pound = {
    toOunce() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("16").toString();
    },

    toGrain() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("7000").toString();
    },

    toKilogram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("2.205").toString();
    },

    toGram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("453.592").toString();
    },

    toMilligram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("453592.37").toString();
    }
  };

  ounce = {
    toGrain() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("437.5").toString();
    },

    toKilogram() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("35.274").toString();
    },

    toGram() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy("28.35").toString();
    },

    toMilligram() {
      let unit = new BigNumber(UNIT);
      return unit.mulitpliedBy("28349.523").toString();
    },

    toPound() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy("16").toString();
    }
  };
}

export default WeightAndMass;
