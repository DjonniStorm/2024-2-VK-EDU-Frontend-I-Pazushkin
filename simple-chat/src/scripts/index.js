import { user, chatStorage, QUERY_CHAT } from './globals';
import {
  chatsLayout,
  incorrect,
  input,
  form,
  buttonCreate,
  messages,
} from './nodes';
import { Chat } from '../entities/Chat';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';
import { Message } from '../entities/Message';
import { loadBuffer, saveBuffer } from './storage';

document.addEventListener('DOMContentLoaded', () => {
  render();
  chatStorage.addChat('123');
});
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);
buttonCreate.addEventListener('click', () => {
  const newChatName =
    prompt('Введите название чата') || user + Math.random().toString();
  chatStorage.addChat(newChatName);

  window.location.href = `?${QUERY_CHAT}=${newChatName}`;
  render();
});

function handleSubmit(event) {
  event.preventDefault();

  if (input.value.trim()) {
    chatStorage.addMessage(input.value);
    saveBuffer();
    loadBuffer();
    input.value = '';
    renderMessages();
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    form.dispatchEvent(new Event('submit'));
  }
}

function render() {
  for (const a of chatStorage.getChats()) {
    console.log(a);
  }

  const urlParams = new URL(window.location.href);

  if (!urlParams.search) {
    renderChats();

    return;
  }

  if (chatStorage.containsChat(urlParams.searchParams.get(QUERY_CHAT))) {
    renderMessages();

    return;
  }

  renderBlank();
}

function renderMessages() {
  messages.innerHTML = '';

  for (const message of chatStorage.getMessages()) {
    console.log(message);

    const { _text, _date, _from } = message;

    messages.prepend(
      Message.render(
        _text,
        _date,
        _from,
        _from === user ? 'sent-message' : undefined,
      ),
    );
  }
}

function renderChats() {
  for (const chat of chatStorage.getChats()) {
    chatsLayout.appendChild(Chat.render(chat));
    console.log(chat, Chat.render(chat));
  }
}

function renderBlank() {
  //TODO: render blank page
  incorrect.style.display = 'flex';
}
