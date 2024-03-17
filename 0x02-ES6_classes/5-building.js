/**
 * Represents a building.
 */
export default class Building {
  /**
   *
   * @param {number} sqft
   */
  constructor(sqft) {
    if (
      new.target !== Building
      && this.evacuationWarningMessage
        === Building.prototype.evacuationWarningMessage
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }
}
