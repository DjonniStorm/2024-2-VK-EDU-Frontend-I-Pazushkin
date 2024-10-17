import {
  incorrect as blankPage,
  backToChatList,
  buttonCreate,
  contactsPage,
  chatUserName,
  searchButton,
  chatsLayout,
  searchInput,
  messages,
  chatPage,
  chatName,
  chatLogo,
  input,
  form,
} from './nodes';
import { loadBuffer, saveBuffer, saveData, loadData } from './storage';
import { chatStorage, QUERY_CHAT, user } from './globals';
import { Message } from '../entities/Message';
import { Chat } from '../entities/Chat';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  render();
  chatUserName.innerText = user;
  randomMessages();
});

function randomMessages() {
  setInterval(async () => {
    try {
      if (chatStorage.isEmpty()) {
        return;
      }

      const messageText = await newMessage();

      if (!messageText) {
        return;
      }

      saveBuffer();
      chatStorage.receiveMessage(chatStorage.randomChat, messageText);
      saveData();
      render();
    } catch (e) {
      console.warn(e);
    }
  }, 25000);
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);
buttonCreate.addEventListener('click', () => {
  const newChatName =
    prompt('Введите название чата') || user + Math.random().toString();
  chatStorage.addChat(newChatName);
  saveData();
  window.location.href = `?${QUERY_CHAT}=${newChatName}`;
  render();
});

backToChatList.addEventListener('click', () => {
  chatStorage.saveBuffer();
  saveBuffer();
  saveData();
  window.location.href = '/2024-2-VK-EDU-Frontend-I-Pazushkin/';
  render();
});

searchInput.addEventListener('input', handleSearch);
searchButton.addEventListener('click', () => handleSearch);

function handleSearch() {
  if (searchInput.value) {
    renderChats(searchInput.value);
  } else {
    renderChats();
  }
}

const displayOptions = {
  chats: 1,
  messages: 2,
  blank: 3,
};

function makeNoneAndVis(currentVisible) {
  contactsPage.classList.add('none');
  blankPage.classList.add('none');
  chatPage.classList.add('none');

  switch (currentVisible) {
    case displayOptions.chats:
      contactsPage.classList.remove('none');
      break;
    case displayOptions.messages:
      chatPage.classList.remove('none');
      break;
    case displayOptions.blank:
      blankPage.classList.remove('none');
      break;
  }

  console.log(chatStorage._storage);
}

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
  const urlParams = new URL(window.location.href);

  if (!urlParams.search) {
    renderChats();
    makeNoneAndVis(displayOptions.chats);

    return;
  }

  if (chatStorage.containsChat(urlParams.searchParams.get(QUERY_CHAT))) {
    chatName.innerText = urlParams.searchParams.get(QUERY_CHAT);
    chatLogo.style.background = `url("https://i.pravatar.cc/60?random=${Math.random()})`;
    chatStorage.chatName = urlParams.searchParams.get(QUERY_CHAT);
    makeNoneAndVis(displayOptions.messages);
    renderMessages();

    return;
  }

  makeNoneAndVis(displayOptions.blank);
}

function renderMessages() {
  loadData();
  messages.innerHTML = '';

  for (const message of chatStorage.getMessages()) {
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

function renderChats(nessesaryChat = '') {
  chatsLayout.innerHTML = '';

  for (const chat of chatStorage.getChats(nessesaryChat)) {
    const [contact, msgs] = chat;

    const div = Chat.render(
      contact,
      msgs.length > 0 ? msgs[msgs.length - 1]._text : 'пусто...',
      msgs.length > 0 ? msgs[msgs.length - 1]._date : ' ',
    );
    div.addEventListener('click', () => handleChatRoute(contact));
    chatsLayout.prepend(div);
  }
}

function handleChatRoute(contact) {
  saveBuffer();
  window.location.href = `?${QUERY_CHAT}=${contact}`;
  render();
}

async function newMessage() {
  try {
    const req = await fetch('https://fish-text.ru/get?format=json');
    const data = await req.json();

    if (data.status == 'success') {
      return data.text;
    }

    return '';
  } catch (e) {
    throw new Error(e.message);
  }
}
