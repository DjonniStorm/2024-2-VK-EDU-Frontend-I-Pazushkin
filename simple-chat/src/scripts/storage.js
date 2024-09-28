import { LOCAL_STORAGE_KEY, user } from './elements';

export function saveToLocalStorage(message) {
    try {
        const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
        const messageToSave = {
            from: user,
            text: message,
            time: new Date().toLocaleTimeString().substring(0, 5),
        };
        if (savedMessages) {
            const messages = JSON.parse(savedMessages);
            console.log(messages, 'array');
            messages.push(messageToSave);
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
            return;
        }
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([messageToSave]),
        );
    } catch (e) {
        console.warn(e);
    }
}

export function getFromLocalStorage() {
    try {
        const savedMessages = localStorage.getItem(LOCAL_STORAGE_KEY);
        return JSON.parse(savedMessages);
    } catch (e) {
        throw new Error('Can`t get data');
    }
}
