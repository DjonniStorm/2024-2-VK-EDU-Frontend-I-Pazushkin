import { user } from '../scripts/globals';
import { Message } from './Message';

export class Storage {
  constructor() {
    this._date = new Date();
    this._buffer = [];
    this._storage = new Map();
    this._chatKey = '';
  }

  receiveMessage(key, message) {
    if (this._storage.get(key)) {
      const prev = this._storage.get(key);

      this._storage.delete(key);

      prev.push(
        new Message(
          message,
          this._date.toLocaleTimeString().substring(0, 5),
          key,
        ),
      );
      this._storage.set(key, prev);
    }
  }

  *getMessages() {
    console.log(this._buffer);

    if (this._storage.get(this._chatKey)) {
      for (const message of this._storage.get(this._chatKey)) {
        yield message;
      }
    }

    for (const chat of this._buffer) {
      console.log(chat);
      yield chat;
    }
  }

  saveBuffer() {
    const prev = this._storage.get(this._chatKey);

    this._storage.delete(this._chatKey);

    this._buffer.forEach(elem => prev.push(elem));

    this._storage.set(this._chatKey, prev);

    this._buffer = [];
  }

  stringify() {
    const map = {};

    for (const [key, value] of this._storage.entries()) {
      map[key] = value;
      console.log(key, value);
    }

    return map;
  }

  addMessage(text) {
    this._buffer.push(
      new Message(text, this._date.toLocaleTimeString().substring(0, 5), user),
    );
    console.log('values', this._storage);
  }

  updateFromObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
      console.log('upd', key, value);
      this._storage.set(key, value);
    }
  }

  *getChats() {
    for (const [key, value] of this._storage) {
      yield [key, value];
    }
  }

  addChat(chatName) {
    this._storage.set(chatName, []);
    this._chatKey = chatName;
  }

  containsChat(chatName) {
    return this._storage.has(chatName);
  }

  isEmpty() {
    return this._storage.size === 0;
  }

  get randomChat() {
    const arr = Array.from(this._storage.keys());

    return arr[Math.floor(Math.random() * arr.length)];
  }

  set buffer(value) {
    console.log('buffer value', value);
    this._buffer = value;
  }

  set chatName(value) {
    this._chatKey = value;
  }

  get chatName() {
    return this._chatKey;
  }

  get buffer() {
    return this._buffer;
  }
}
