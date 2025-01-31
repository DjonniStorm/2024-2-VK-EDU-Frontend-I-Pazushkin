import { user } from '../scripts/globals';
import { Message } from './Message';
import { Colors } from './Colors';

export class Storage {
  constructor() {
    this._users = {};
    this._chatKey = '';
    this._unnesesaryAdditions = new Colors();
  }
  #updateMessages(text, userFrom, userTo, sender) {
    const timeStamp = new Date().toLocaleTimeString().substring(0, 5);

    if (this._users[userFrom] && this._users[userFrom].get(userTo)) {
      const prev = this._users[userFrom].get(userTo);

      this._users[userFrom].delete(userTo);
      prev.push(new Message(text, timeStamp, sender));
      this._users[userFrom].set(userTo, prev);

      return;
    }

    this._users[userFrom].set(this._chatKey, [
      new Message(text, timeStamp, sender),
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

  updateFromStorage(obj) {
    const upd = {};

    for (const [userName, chats] of Object.entries(obj)) {
      const userMap = new Map();

      if (typeof chats === 'object' && !Array.isArray(chats)) {
        for (const [contact, messages] of Object.entries(chats)) {
          userMap.set(contact, messages);
        }
      } else {
        userMap.set(userName, chats);
      }

      upd[userName] = userMap;
    }

    this._users = upd;
  }

  addChat(chatWith) {
    this._chatKey = chatWith;

    if (this._users[user]) {
      this.#updateChats(user, chatWith);
    } else {
      this._unnesesaryAdditions.newUser(user);

      this._users[user] = new Map().set(chatWith, []);
    }

    if (this._users[chatWith]) {
      this.#updateChats(chatWith, user);
    } else {
      this._unnesesaryAdditions.newUser(chatWith);

      this._users[chatWith] = new Map().set(user, []);
    }
  }

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

  *getMessages() {
    if (!this._users[user]) {
      return;
    }

    const messages = this._users[user].get(this._chatKey);

    if (!messages) {
      return;
    }

    for (const message of messages) {
      yield message;
    }
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
  *getChats() {
    if (!this._users[user]) {
      return;
    }

    for (const [key, value] of this._users[user]) {
      console.log(key, value);
      yield [key, value];
    }
  }

  containsChat(chatName) {
    if (this._users[user] && this._users[user].get(chatName)) {
      return true;
    }

    return false;
  }

  *getAllUsers() {
    for (const user of Object.getOwnPropertyNames(this._users)) {
      yield user;
    }
  }

  getUserBgColor(value) {
    return this._unnesesaryAdditions.getColor(value);
  }

  loadColors(value) {
    this._unnesesaryAdditions.loadColors(value);
  }

  saveColors() {
    return this._unnesesaryAdditions.saveColors();
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
