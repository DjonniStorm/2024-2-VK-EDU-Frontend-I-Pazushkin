import { Storage } from '../entities/Storage';

export const chatStorage = new Storage();

export let user = prompt('Введите имя пользователя') || Math.random();

export const changeUser = newUser => {
  user = newUser;
};

export const LOCAL_STORAGE_KEY = 'chat-messages';

export const QUERY_CHAT = 'chatID';

export const githubRepo = '/DjonniStorm/2024-2-VK-EDU-Frontend-I-Pazushkin/';
