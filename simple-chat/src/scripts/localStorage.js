import { LOCAL_STORAGE_KEY } from './globals';

export function getFromLocalStorage() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
}

export function saveToLocalStorage(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}
