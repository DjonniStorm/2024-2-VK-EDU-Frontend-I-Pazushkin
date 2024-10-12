import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../scripts/localStorageOperator';
import { user } from '../scripts/globals';
import { Message } from './Message';

export class Storage {
  constructor() {
    this._chatStorage = new Map();
    this._buffer = [];
    this._chatKey = '';
    this._date = new Date();
    this._separator = ';'; //csv :)
    // debugger;
  }
  #saveBuffer() {
    // const prevMessages = this._chatStorage.get(this._chatKey);
    // this._chatStorage.set(this._chatKey, prevMessages.push(...this._buffer));
    // saveToLocalStorage(this._chatStorage);
    // this._buffer = [];
  }
  renderChats(value) {
    const chatDiv = document.createElement('div'),
      // eslint-disable-next-line perfectionist/sort-variable-declarations
      chatInfo = document.createElement('div'),
      lastMsg = document.createElement('div'),
      // eslint-disable-next-line perfectionist/sort-variable-declarations
      lastMsgText = document.createElement('p'),
      lastMsgTime = document.createElement('p');

    chatDiv.classList.add('contacts__list-contact');
    chatInfo.classList.add('contacts__list-contact-info');
    lastMsg.classList.add('contact__last-msg');
    lastMsgText.classList.add('contact__last-msg-text');
    lastMsgTime.classList.add('contact__last-msg-time');

    lastMsgTime.innerText = value[value.length - 1];
    lastMsgText.innerText = value[value.length - 1];

    chatInfo.appendChild(lastMsg);
    lastMsg.appendChild(lastMsgTime);
    lastMsg.appendChild(lastMsgText);
    chatDiv.appendChild(chatInfo);

    return chatDiv;
  }
  addMessage(text, classList = 'receivedMessage') {
    this._buffer.push(
      new Message(
        text,
        this._date.toLocaleTimeString(),
        user,
        this._chatKey,
        classList,
      ),
    );
    console.log(text);
    console.log(this._buffer);

    // if (this._buffer.length % 5 === 0) {
    //   this.#saveBuffer();
    // }
  }

  *getChats() {
    console.log('тут', this._chatStorage.values());

    for (const value of this._buffer) {
      console.log(this.renderChats(value));
      yield this.renderChats(value);
    }
  }

  addNewChat(chatKey) {
    if (this._chatStorage.get(chatKey)) {
      chatKey += this._separator + Math.random();
    }

    this._chatStorage.set(chatKey, []);
  }

  *getMessages() {
    for (const [key, value] of this._chatStorage) {
      yield { value, key };
    }
  }

  set chatKey(key) {
    if (this._chatKey) {
      this.#saveBuffer();
    }

    this._chatKey = key;
  }
  get chatKey() {
    return this._chatKey;
  }
}
