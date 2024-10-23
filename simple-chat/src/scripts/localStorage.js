import { LOCAL_STORAGE_KEY, chatStorage } from './globals';

export function getFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (!data) {
    saveToLocalStorage();

    return;
  }

  loadColors();
  chatStorage.updateFromStorage(data);
}

export function loadColors() {
  const data = JSON.parse(localStorage.getItem(`${LOCAL_STORAGE_KEY}colors`));

  if (!data) {
    saveColors();

    return;
  }

  chatStorage.loadColors(data);
}

export function saveColors() {
  const data = JSON.stringify(chatStorage.saveColors());

  localStorage.setItem(`${LOCAL_STORAGE_KEY}colors`, data);
}

export function saveToLocalStorage() {
  saveColors();
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify(chatStorage.stringify()),
  );
}
