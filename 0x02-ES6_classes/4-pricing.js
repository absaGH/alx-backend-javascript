import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(am) {
    this._amount = am;
  }

  set currency(cur) {
    if (!(cur instanceof Currency)) throw TypeError('currency must be an instance of Currency');
    this._currency = cur;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
