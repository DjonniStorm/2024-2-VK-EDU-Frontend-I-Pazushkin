import { user as userName, chatStorage, QUERY_CHAT, messages } from './globals';
import { chatUserName, chatsLayout, incorrect, input, form } from './nodes';
import { Chat } from '../entities/Chat';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  chatStorage.chatKey = 'aylhe';
  chatStorage.addMessage('adc');
  chatStorage.addMessage('adc2');
  chatStorage.addMessage('adc3');
  chatStorage.addMessage('adc4');
  chatStorage.addMessage('adc5');
  render();
  chatUserName.innerText = userName.trim() ? userName : '👨🏻‍💻';
});
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

function handleSubmit(event) {
  event.preventDefault();

  if (input.value.trim()) {
    chatStorage.addMessage(input.value, '.received-message');
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
  const urlParams = new URL(window.location.href);

  if (!urlParams.search) {
    renderChats();

    return;
  }

  if (
    chatStorage.containsChat(new URLSearchParams(urlParams).get(QUERY_CHAT))
  ) {
    renderMessages();
  }

  renderBlank();
}

function renderMessages() {}

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
