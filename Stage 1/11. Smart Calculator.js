class SmartCalculator {
  constructor(initialValue) {
    this.res = String(initialValue);
  }

  add(number) {
    this.res += `+${number}`;
    return this;
  }

  subtract(number) {
    this.res += `-${number}`;
    return this;
  }

  multiply(number) {
    this.res += `*${number}`;
    return this;
  }

  devide(number) {
    this.res += `/${number}`;
    return this;
  }

  pow(number) {
    this.res += `**${number}`;
    return this;
  }

  valueOf() {
    return eval(this.res)
  }

  toString() {
    return eval(this.res)
  }
}

module.exports = SmartCalculator;
