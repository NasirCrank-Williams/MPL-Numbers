import BigNumber from "../libraries/bignumber.js";

let UNIT;

class Temperature {
  constructor(unit) {
    UNIT = unit;
  }

  fahrenheit = {
    toCelcius() {
      let unit = new BigNumber(UNIT);
      return unit
        .negated(32)
        .multipliedBy(5 / 9)
        .toString();
    },

    toKelvin() {
      let unit = new BigNumber(UNIT);
      return unit
        .negated(32)
        .multipliedBy(5 / 9)
        .plus(273.15)
        .toString();
    }
  };

  celcius = {
    toKelvin() {
      let unit = new BigNumber(UNIT);
      return unit.plus(273.15).toString();
    },

    toFahrenheit() {
      let unit = new BigNumber(UNIT);
      return unit
        .multipliedBy(9 / 5)
        .plus(32)
        .toString();
    }
  };

  kelvin = {
    toFahrenheit() {
      let unit = new BigNumber(UNIT);
      return unit
        .negated(273.15)
        .multipliedBy(9 / 5)
        .plus(32);
    },

    toCelcius() {
      let unit = new BigNumber(UNIT);
      return unit.negated(273.15).toString();
    }
  };
}

export default Temperature;
