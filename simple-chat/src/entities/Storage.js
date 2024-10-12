import { Chat } from './Chat';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from '../scripts/localStorageOperator';

export class Storage {
  _chatStorage;
  _buffer;
  constructor() {
    this._chatStorage = new Map();
    this._buffer = [];
  }
  addNewChat(chatName, chatWith) {
    this._chatStorage.set(chatName, new Chat(chatWith));
  }
  getMessages() {}
  addMessage() {}
}
