import { saveToLocalStorage, getFromLocalStorage } from './localStorage';
import { chatStorage, user, user } from './globals';

export function saveLocalBuffer() {
  const prevData = getFromLocalStorage();

  if (!prevData) {
    return;
  }

  prevData.buffer = chatStorage.buffer;
}

export function saveStorage() {
  const prevData = getFromLocalStorage();

  if (!prevData) {
    const dataToSave = {
      users: {
        user: Array.from(chatStorage.entries()),
      },
      buffer: [],
    };
    saveToLocalStorage(dataToSave);

    return;
  }

  if (prevData[user]) {
    const prevUserData = prevData[user];

    for (const message of chatStorage.getMessages(user)) {
      prevData.users[user].push(message);
    }

    const dataToSave = {
      buffer: [],
    };
  }
}
