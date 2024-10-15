import { getFromLocalStorage, saveToLocalStorage } from './localStorage';
import { Storage } from '../entities/Storage';
import { chatStorage, user } from './globals';

export function saveBuffer() {
  const data = getFromLocalStorage();

  if (!data) {
    const data = {
      lastChat: chatStorage.chatName,
      buffer: chatStorage.buffer,
      chats: {},
    };
    Object.assign(data.chats, chatStorage.stringify());
    saveToLocalStorage(data);

    return;
  }

  data.buffer = chatStorage.buffer;
  chatStorage.buffer = [];
  saveToLocalStorage(data);
}

export function saveData() {
  const data = {
    lastChat: chatStorage.chatName,
    buffer: chatStorage.buffer,
    chats: {},
  };
  Object.assign(data.chats, chatStorage.stringify());
  saveToLocalStorage(data);
}

export function loadBuffer() {
  const data = getFromLocalStorage();

  if (!data) {
    saveData();
  }

  chatStorage.chatName = data.lastChat;
  chatStorage.buffer = data.buffer;

  if (data.buffer.length > 3) {
    chatStorage.saveBuffer();
    saveData();
    loadData();
  }
}

export function loadData() {
  const data = getFromLocalStorage();

  if (!data) {
    saveData();

    return;
  }

  console.log(data);
  console.log('чаты', data.chats);

  if (data.buffer) {
    chatStorage.buffer = data.buffer;
  }

  if (data.lastChat) {
    chatStorage.chatName = data.lastChat;
  }

  chatStorage.updateFromObject(data.chats);
}
