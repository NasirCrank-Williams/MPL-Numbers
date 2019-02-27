import BigNumber from "../libraries/bignumber.js";

let UNIT;

class Length {
  constructor(unit) {
    UNIT = unit;
  }

  inch = {
    toFoot() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(12).toString();
    },

    toYard() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(36).toString();
    },

    toMile() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(63360).toString();
    },

    toMeter() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(39.37).toString();
    },

    toKilometer() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(39370.079).toString();
    }
  };

  foot = {
    toYard() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(3).toString();
    },

    toMile() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(5280).toString();
    },

    toMeter() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(3.281).toString();
    },

    toKilometer() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(3280.84).toString();
    },

    toInch() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(12).toString();
    }
  };

  yard = {
    toMile() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(1760).toString();
    },

    toMeter() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(1.094).toString();
    },

    toKilometer() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(1093.613).toString();
    },

    toInch() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(36).toString();
    },

    toFoot() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(3).toString();
    }
  };

  mile = {
    toMeter() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(1609.344).toString();
    },

    toKilometer() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(1.609).toString();
    },

    toInch() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(63360).toString();
    },

    toFoot() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(5280).toString();
    },

    toYard() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(1760).toString();
    }
  };

  meter = {
    toKilometer() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(1000).toString();
    },

    toInch() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(39.37).toString();
    },

    toFoot() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(3.281).toString();
    },

    toYard() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(1.094).toString();
    },

    toMile() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(1609.344).toString();
    }
  };

  kilometer = {
    toInch() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(39370.079).toString();
    },

    toFoot() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(3280.84).toString();
    },

    toYard() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(1093.613).toString();
    },

    toMile() {
      let unit = new BigNumber(UNIT);
      return unit.dividedBy(1.609).toString();
    },

    toMeter() {
      let unit = new BigNumber(UNIT);
      return unit.multipliedBy(1000).toString();
    }
  };
}

export default Length;
