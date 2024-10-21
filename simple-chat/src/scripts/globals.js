import { Storage } from '../entities/Storage';

export let user = prompt('Введите имя пользователя') || Math.random();

export const LOCAL_STORAGE_KEY = 'chat-messages';

export const QUERY_CHAT = 'chatID';

export const chatStorage = new Storage();
