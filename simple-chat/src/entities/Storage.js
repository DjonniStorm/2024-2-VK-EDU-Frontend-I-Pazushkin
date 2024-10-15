import { user } from '../scripts/globals';
import { Message } from './Message';

export class Storage {
  constructor() {
    this._date = new Date();
    this._buffer = [];
    this._storage = new Map();
    this._chatKey = '';
  }

  #saveBuffer() {
    const prev = this._storage.get(this._chatKey);

    this._buffer.forEach(elem => prev.push(elem));

    this._buffer = [];
  }

  addMessage(text, to) {
    this._buffer.push(
      new Message(
        text,
        this._date.toLocaleTimeString().substring(0, 5),
        user,
        to,
      ),
    );

    if (this._buffer.length % 3 == 0) {
      this.#saveBuffer();
    }
  }

  set chatName(value) {
    this._chatKey = value;
  }
  get chatName() {
    return this._chatKey;
  }
}
