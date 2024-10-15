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

  *getMessages() {
    console.log(this._buffer);

    for (const chat of this._buffer) {
      console.log(chat);
      yield chat;
    }
    if (!this._storage.get(this._chatKey)) {
      return;
    }
    console.log(this._storage.get(this._chatKey));
    for (const message of this._storage.get(this._chatKey)) {
      yield message;
    }
  }

  saveBuffer() {
    console.log('chat-key', this._chatKey);
    console.log('chat-key2', this._storage.get(this._chatKey));

    const prev = this._storage.get(this._chatKey);

    this._storage.delete(this._chatKey);

    this._buffer.forEach(elem => prev.push(elem));

    this._storage.set(this._chatKey, prev);

    this._buffer = [];
  }

  updateFromObject(obj) {
    for (const [key, value] of Object.entries(obj)) {
      console.log('upd', key, value);
      this._storage.set(key, value);
    }
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
