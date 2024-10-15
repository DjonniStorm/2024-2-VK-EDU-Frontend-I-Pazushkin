import { getFromLocalStorage, saveToLocalStorage } from './localStorage';
import { Storage } from '../entities/Storage';
import { chatStorage, user } from './globals';

export function saveBuffer() {
  const data = getFromLocalStorage();

  if (!data) {
    saveToLocalStorage({
      chats: Array.from(chatStorage.stringify()),
      buffer: chatStorage.buffer,
    });

    return;
  }

  data.buffer = chatStorage.buffer;
  chatStorage.buffer = [];
  saveToLocalStorage(data);
}

export function saveData() {
  const key = chatStorage.chatName;

  saveToLocalStorage({
    chats: {
      key: chatStorage.stringify(),
    },
    buffer: chatStorage.buffer,
  });
}

export function loadBuffer() {
  const data = getFromLocalStorage();

  if (!data) {
    saveData();
  }

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
  console.log(data.chats[chatStorage.chatName]);
  chatStorage.updateFromObject(data.chats[chatStorage.chatName]);
}
