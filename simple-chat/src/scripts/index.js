import {
  backToChatList,
  buttonCreate,
  chatUserName,
  searchButton,
  contactsPage,
  searchInput,
  chatsLayout,
  blankPage,
  messages,
  chatPage,
  chatName,
  input,
  form,
} from './nodes';
import { chatStorage, QUERY_CHAT, changeUser, user } from './globals';
import { saveData, loadData } from './storage';
import { Message } from '../entities/Message';
import { Chat } from '../entities/Chat';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';

//event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  history.replaceState(null, '', `/`);

  handleAddUser(user);
  render();
});

form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);
buttonCreate.addEventListener('click', handleCreateChat);

searchInput.addEventListener('input', handleSearch);
searchButton.addEventListener('click', () => handleSearch);

chatUserName.addEventListener('change', event => {
  const selectedValue = event.target.value;

  // eslint-disable-next-line no-import-assign
  // user = selectedValue;
  changeUser(selectedValue);
  render();
});

backToChatList.addEventListener('click', () => {
  history.replaceState(null, '', '/');
  render();
});

// handlers

function handleAddUser(name) {
  const newOption = document.createElement('option');

  newOption.value = name;
  newOption.textContent = name;
  chatUserName.appendChild(newOption);
}

function handleCreateChat() {
  const newChatName =
    prompt('Введите название чата') || user + Math.random().toString();

  if (chatStorage.containsChat(newChatName)) {
    const confirmUpd = confirm(
      `Такой чат уже существует, создать чат: ${newChatName}2?`,
    );

    if (confirmUpd) {
      chatStorage.addChat(`${newChatName}2`);
      history.replaceState(null, '', `?${QUERY_CHAT}=${newChatName}2`);
    } else {
      history.replaceState(null, '', `?${QUERY_CHAT}=${newChatName}`);
    }

    handleAddUser(newChatName);
    render();

    return;
  }

  chatStorage.addChat(`${newChatName}`);
  history.replaceState(null, '', `?${QUERY_CHAT}=${newChatName}`);
  render();
  handleAddUser(newChatName);
}

function handleSearch() {}

function handleSubmit(event) {
  event.preventDefault();

  if (input.value.trim()) {
    chatStorage.addMessage(input.value);
    render();
    input.value = '';
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    form.dispatchEvent(new Event('submit'));
  }
}

const displayOptions = {
  chats: 1,
  // eslint-disable-next-line perfectionist/sort-objects
  messages: 2,
  blank: 3,
};

function makeNoneAndVis(visiblePage) {
  contactsPage.classList.add('none');
  blankPage.classList.add('none');
  chatPage.classList.add('none');

  switch (visiblePage) {
    case displayOptions.messages:
      chatPage.classList.remove('none');
      break;
    case displayOptions.chats:
      contactsPage.classList.remove('none');
      break;
    case displayOptions.blank:
      blankPage.classList.remove('none');
      break;
  }
}

function render() {
  const urlParams = new URL(window.location.href);
  console.log(urlParams.search, urlParams.searchParams.get(QUERY_CHAT));
  console.log(
    chatStorage._users,
    chatStorage.containsChat(urlParams.searchParams.get(QUERY_CHAT)),
  );

  if (!urlParams.search) {
    renderChats();
    makeNoneAndVis(displayOptions.chats);

    return;
  }

  if (chatStorage.containsChat(urlParams.searchParams.get(QUERY_CHAT))) {
    //chat
    chatName.innerText = urlParams.searchParams.get(QUERY_CHAT);
    chatStorage.chatKey = urlParams.searchParams.get(QUERY_CHAT);

    makeNoneAndVis(displayOptions.messages);

    renderMessages();

    return;
  }
  //error page
}

function renderChats() {
  chatsLayout.innerHTML = '';

  for (const chat of chatStorage.getChats(user)) {
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

function handleChatRoute(id) {
  history.replaceState(null, '', `?${QUERY_CHAT}=${id}`);
  render();
}

function renderMessages() {
  messages.innerHTML = '';

  for (const item of chatStorage.getMessages()) {
    console.log(item);

    const { _text, _date, _from } = item;

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
