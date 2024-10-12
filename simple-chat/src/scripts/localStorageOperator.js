import { LOCAL_STORAGE_KEY } from './elements';

export function saveToLocalStorage(storage) {
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);

    let map = new Map();

    if (data) {
      const parsedData = JSON.parse(data);

      map = new Map(parsedData);
    }

    storage.forEach((value, key) => {
      map.set(key, value);
    });

    return map;
  } catch (e) {
    console.warn(e);

    return storage;
  }
}

export function getFromLocalStorage() {
  try {
    const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);

    return JSON.parse(savedMessages);
  } catch (e) {
    throw new Error('Can`t get data', e);
  }
}
