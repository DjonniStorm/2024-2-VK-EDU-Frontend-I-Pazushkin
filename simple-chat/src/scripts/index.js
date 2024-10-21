import {
  backToChatList,
  buttonCreate,
  chatUserName,
  searchButton,
  searchInput,
  chatName,
  input,
  form,
} from './nodes';
import { chatStorage, QUERY_CHAT, user } from './globals';
import { saveData, loadData } from './storage';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';

//event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  render();
  chatUserName.innerText = user;
});

form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);
buttonCreate.addEventListener('click', handleCreateChat);

searchInput.addEventListener('input', handleSearch);
searchButton.addEventListener('click', () => handleSearch);

backToChatList.addEventListener('click', () => {
  window.location.href =
    'https://djonnistorm.github.io/2024-2-VK-EDU-Frontend-I-Pazushkin/';
});

// handlers

function handleCreateChat() {
  const newChatName =
    prompt('Введите название чата') || user + Math.random().toString();
  chatStorage.addChat(newChatName);
  saveData();
  window.location.href = `?${QUERY_CHAT}=${newChatName}`;
}

function handleSearch() {}

function handleSubmit(event) {
  event.preventDefault();

  if (input.value.trim()) {
    chatStorage.addMessage(input.value);
    input.value = '';
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
    //all chats
    return;
  }

  if (chatStorage.containsChat(urlParams.searchParams.get(QUERY_CHAT))) {
    //chat
    chatName.innerText = urlParams.searchParams.get(QUERY_CHAT);
    chatStorage.chatName = urlParams.searchParams.get(QUERY_CHAT);

    return;
  }
  //error page
}
