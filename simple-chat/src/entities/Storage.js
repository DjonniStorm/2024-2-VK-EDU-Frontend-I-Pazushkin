import { saveBuffer, loadBuffer, saveData } from '../scripts/storage';
import { user } from '../scripts/globals';
import { Message } from './Message';

export class Storage {
  constructor() {
    this._date = new Date();
    this._buffer = [];
    this._storage = new Map();
    this._chatKey = '';
  }

  saveBuffer() {
    const prev = this._storage.get(this._chatKey);

    this._buffer.forEach(elem => prev.push(elem));

    this._storage.set(this._chatKey, prev);

    this._buffer = [];
  }

  *getMessages() {
    for (const chat of this._buffer) {
      yield chat;
    }

    for (const message of this._storage.get(this._chatKey)) {
      yield message;
    }
  }

  stringify() {
    const map = {};

    for (const [key, value] of this._storage.entries()) {
      map[key] = value;
    }

    return map;
  }

  addMessage(text) {
    this._buffer.push(
      new Message(text, this._date.toLocaleTimeString().substring(0, 5), user),
    );
  }

  updateFromObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
      this._storage.set(key, value);
    }
  }

  *getChats() {
    for (const chat of this._storage.entries()) {
      yield chat;
    }
  }

  addChat(chatName) {
    this._storage.set(chatName, []);
    this._chatKey = chatName;
  }

  containsChat(chatName) {
    return this._storage.has(chatName);
  }

  set buffer(value) {
    console.log('buffer value', value);
    this._buffer = value;
  }

  get chatName() {
    return this._chatKey;
  }

  get buffer() {
    return this._buffer;
  }
}
