import Building from './5-building';

/**
 * Inherits from Building class
 * 
 */
export default class SkyHighBuilding extends Building {
    /**
     * @param {number} sqft 
     * @param {number} floors 
     */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(value) {
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
