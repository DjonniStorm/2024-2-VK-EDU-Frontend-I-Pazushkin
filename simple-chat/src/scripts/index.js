import {
  incorrect as blankPage,
  backToChatList,
  buttonCreate,
  contactsPage,
  chatUserName,
  chatsLayout,
  messages,
  chatPage,
  chatName,
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
      console.log('1 return');
      console.log(chatStorage.isEmpty());

      if (chatStorage.isEmpty()) {
        return;
      }

      console.log('2 return');

      const messageText = await newMessage();

      console.log('upd text', messageText);

      if (!messageText) {
        return;
      }

      console.log('3 return');

      chatStorage.receiveMessage(chatStorage.randomChat, messageText);
      saveData();
      render();
    } catch (e) {
      console.warn(e);
    }
  }, 10000);
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
  makeNoneAndVis(displayOptions.chats);
  window.location.href = '/';
  render();
});

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
  console.log('messages.innerHTML = ""');

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
  chatsLayout.innerHTML = '';

  for (const chat of chatStorage.getChats()) {
    const [contact, msgs] = chat;

    const div = Chat.render(
      contact,
      msgs.length > 0 ? msgs[msgs.length - 1]._text : 'пусто (',
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
    // const req = await fetch('https://fish-text.ru/get?format=json');
    const req = await fetch('123');
    const data = await req.json();

    console.log('text', data.text);

    if (data.status == 'success') {
      return data.text;
    }

    return '';
  } catch (e) {
    throw new Error(e.message);
  }
}
