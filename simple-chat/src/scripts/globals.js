import { Storage } from '../entities/Storage';

export const chatStorage = new Storage();

export const LOCAL_STORAGE_KEY = 'chat-messages';

export const user = prompt('Введите имя пользователя');
