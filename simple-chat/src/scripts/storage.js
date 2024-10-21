import { getFromLocalStorage, saveToLocalStorage } from './localStorage';
import { chatStorage } from './globals';

export function saveData() {
  const users = {};

  saveToLocalStorage(users);
}

export function loadData() {
  const data = getFromLocalStorage();

  if (!data) {
    saveData();
  }
}
