/**
 *  A class for a Car
 *
 */
export default class Car {
  constructor(brand, motor, color) {
    // if (
    //   typeof brand !== 'string'
    //   || typeof motor !== 'string'
    //   || typeof color !== 'string'
    // ) {
    //   throw new TypeError('Brand, motor and color must be strings');
    // }
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  //   cloneCar() {
  //     return new Car(this._brand, this._motor, this._color);
  //   }
  cloneCar() {
    return new this.constructor();
  }
}
