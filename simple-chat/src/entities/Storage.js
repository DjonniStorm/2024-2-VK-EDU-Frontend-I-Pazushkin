import { user } from '../scripts/globals';
import { Message } from './Message';

export class Storage {
  constructor() {
    this._users = {};
    this._date = new Date();
    this._chatKey = '';
  }
  #updateMessages(text, userFrom) {
    if (this._users[userFrom] && this._users[userFrom].get(this._chatWith)) {
      const prev = this._users[userFrom].get(this._chatWith);

      this._users[userFrom].delete(this._chatKey);
      prev.push(new Message(text, this._date.toLocaleTimeString(), userFrom));
      this._users[userFrom].set(this._chatKey, prev);

      return;
    }

    this._users[userFrom] = new Map();

    this._users[userFrom].set(this._chatKey, [
      new Message(text, this._date.toLocaleTimeString(), userFrom),
    ]);
  }
  #updateChats(user1, user2) {
    const prev = this._users[user1];

    if (prev.get(user2)) {
      return;
    }

    prev.set(user1, []);

    this._users[user1] = prev;
  }

  addChat(chatWith) {
    this._chatKey = chatWith;

    if (this._users[user]) {
      this.#updateChats(user, chatWith);
    } else {
      this._users[user] = new Map().set(chatWith, []);
    }

    if (this._users[chatWith]) {
      this.#updateChats(chatWith, user);
    } else {
      this._users[chatWith] = new Map().set(user, []);
    }

    console.log(this._users);
  }

  addMessage(messageText) {
    this.#updateMessages(messageText, user);
    this.#updateMessages(messageText, this._chatKey);

    console.log('add message', this._users);
  }
  *getAllUsers() {
    for (const user of Object.getOwnPropertyNames(this._users)) {
      yield user;
    }
  }

  //TODO: norm stringify
  stringify() {
    const users = {};

    console.log(users, JSON.stringify(users));
  }

  addUser() {
    this._users[user] = new Map();
  }
}
