export class Colors {
  #getRnd = () => Math.floor(Math.random() * 256);
  constructor() {
    this._colors = new Map();
  }

  newUser(userName) {
    if (this._colors.has(userName)) {
      return;
    }

    this._colors.set(
      userName,
      `rgb(${this.#getRnd()}, ${this.#getRnd()}, ${this.#getRnd()})`,
    );
  }

  saveColors() {
    return Object.fromEntries(this._colors.entries());
  }

  loadColors(obj) {
    this._colors = new Map(Object.entries(obj));
  }
  getColor(name) {
    return this._colors.get(name);
  }
}
