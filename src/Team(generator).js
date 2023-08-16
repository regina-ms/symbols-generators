// eslint-disable-next-line no-unused-vars
class Team {
  constructor(...characters) {
    for (const character of characters) {
      this[characters.indexOf(character)] = character;
    }
    this.length = characters.length;
  }

  * [Symbol.iterator]() {
    const team = this;
    // eslint-disable-next-line no-plusplus
    for (let value = 0; value < this.length; value++) {
      yield team[value];
    }
  }
}
