/* eslint-disable */
import { user } from '../scripts/globals';
import { Message } from './Message';

export class Storage {
  constructor() {
    this._users = {};
    this._date = new Date();
    this._chatKey = '';
  }
  #updateMessages(text, userFrom, userTo, sender) {
    if (this._users[userFrom] && this._users[userFrom].get(userTo)) {
      const prev = this._users[userFrom].get(userTo);

      this._users[userFrom].delete(userTo);
      prev.push(new Message(text, this._date.toLocaleTimeString(), sender));
      this._users[userFrom].set(userTo, prev);

      return;
    }

    this._users[userFrom].set(this._chatKey, [
      new Message(text, this._date.toLocaleTimeString(), sender),
    ]);
  }
  #updateChats(user1, user2) {
    const prev = this._users[user1];

    if (prev.get(user2)) {
      return;
    }

    prev.set(user2, []);

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
  }

  //TODO: norm stringify
  stringify() {
    const serializableUsers = {};

    for (const [userName, chats] of Object.entries(this._users)) {
      serializableUsers[userName] = {};

      for (const [chatUser, messages] of chats) {
        serializableUsers[userName][chatUser] = messages;
      }
    }

    return serializableUsers;
  }

  addMessage(messageText) {
    this.#updateMessages(
      messageText, //text
      user, //userFrom
      this._chatKey, //userTO
      user, //sender
    );
    this.#updateMessages(messageText, this._chatKey, user, user);
  }

  *getMessages() {
    if (!this._users[user]) {
      return;
    }
    console.log('getMessages');
    console.log(this._users);
    console.log(this._users[user]);
    // debugger;
    const messages = this._users[user].get(this._chatKey);
    if (!messages) {
      return;
    }
    for (const message of messages) {
      // if (message._)
      yield message;
    }
  }
  *getChats() {
    if (!this._users[user]) {
      return;
    }

    for (const [key, value] of this._users[user]) {
      console.log(key, value);
      yield [key, value];
    }
  }
  *getAllUsers() {
    for (const user of Object.getOwnPropertyNames(this._users)) {
      yield user;
    }
  }

  containsChat(chatName) {
    if (this._users[user] && this._users[user].get(chatName)) {
      return true;
    }

    return false;
  }

  addUser() {
    this._users[user] = new Map();
  }

  set chatKey(value) {
    this._chatKey = value;
  }
  get chatKey() {
    return this._chatKey;
  }
}
