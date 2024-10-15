import {
  incorrect as blankPage,
  backToChatList,
  buttonCreate,
  contactsPage,
  chatUserName,
  chatsLayout,
  messages,
  chatPage,
  input,
  form,
} from './nodes';
import { loadBuffer, saveBuffer, saveData, loadData } from './storage';
import { user, chatStorage, QUERY_CHAT } from './globals';
import { Message } from '../entities/Message';
import { Chat } from '../entities/Chat';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  render();
  chatUserName.innerText = user;
});
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
  for (const a of chatStorage.getChats()) {
    console.log(a);
  }

  const urlParams = new URL(window.location.href);

  if (!urlParams.search) {
    renderChats();
    makeNoneAndVis(displayOptions.chats);

    return;
  }

  if (chatStorage.containsChat(urlParams.searchParams.get(QUERY_CHAT))) {
    renderMessages();
    chatStorage.chatName = urlParams.searchParams.get(QUERY_CHAT);
    makeNoneAndVis(displayOptions.messages);

    return;
  }

  makeNoneAndVis(displayOptions.blank);
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
    const [contact, msgs] = chat;

    chatsLayout.appendChild(
      Chat.render(
        contact,
        msgs[msgs.length - 1]._text,
        msgs[msgs.length - 1]._date,
      ),
    );

    console.log(
      'chat-item',
      chat,
      Chat.render(
        contact,
        msgs[msgs.length - 1]._text,
        msgs[msgs.length - 1]._date,
      ),
    );
  }
}

function renderBlank() {
  //TODO: render blank page
}
