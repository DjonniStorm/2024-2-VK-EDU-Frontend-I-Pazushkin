import {
  backToChatList,
  buttonCreate,
  chatUserName,
  searchButton,
  contactsPage,
  searchInput,
  chatsLayout,
  blankPage,
  chatLogo,
  messages,
  chatPage,
  chatName,
  input,
  form,
} from './nodes';
import {
  chatStorage,
  QUERY_CHAT,
  githubRepo,
  changeUser,
  user,
} from './globals';
import { getFromLocalStorage, saveToLocalStorage } from './localStorage';
import { Message } from '../entities/Message';
import { Chat } from '../entities/Chat';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';
import '../styles/index.css';

//event listeners
document.addEventListener('DOMContentLoaded', () => {
  history.replaceState(null, '', `${githubRepo}`);
  getFromLocalStorage();
  handleAddUser(user);
  render();
});

form.addEventListener('submit', handleSubmit);
form.addEventListener('keydown', handleKeyPress);
buttonCreate.addEventListener('click', handleCreateChat);

searchInput.addEventListener('input', handleSearch);
searchButton.addEventListener('click', () => handleSearch);

chatUserName.addEventListener('change', event => {
  const selectedValue = event.target.value;

  changeUser(selectedValue);
  render();
});

backToChatList.addEventListener('click', handleArrowBack);

// handlers

function handleArrowBack() {
  history.replaceState(null, '', `${githubRepo}`);
  saveToLocalStorage();
  render();
}

function handleAddUser(first = '') {
  chatUserName.innerHTML = '';
  debugger;

  if (first) {
    const option = document.createElement('option');

    option.value = first;
    option.textContent = first.toString().substring(0, 10);
    chatUserName.prepend(option);
  }

  for (const i of chatStorage.getAllUsers()) {
    if (!(first === i)) {
      const prevOption = document.createElement('option');

      prevOption.value = i;
      prevOption.textContent = i.toString().substring(0, 10);
      chatUserName.appendChild(prevOption);
    }
  }
}

function handleCreateChat() {
  const newChatName =
    prompt('Введите название чата') || user + Math.random().toString();

  if (newChatName === user || chatStorage.containsChat(newChatName)) {
    const confirmUpd = confirm(
      `Такой чат уже существует, создать чат: ${newChatName}2?`,
    );

    if (confirmUpd) {
      chatStorage.addChat(`${newChatName}2`);
      history.replaceState(
        null,
        '',
        `${githubRepo}?${QUERY_CHAT}=${newChatName}2`,
      );
    } else {
      history.replaceState(
        null,
        '',
        `${githubRepo}?${QUERY_CHAT}=${newChatName}`,
      );
    }

    handleAddUser();
    saveToLocalStorage();
    render();

    return;
  }

  chatStorage.addChat(`${newChatName}`);
  history.replaceState(null, '', `${githubRepo}?${QUERY_CHAT}=${newChatName}`);
  render();
  handleAddUser();
}

function handleSearch() {
  renderChats(searchInput.value);
}

function handleSubmit(event) {
  event.preventDefault();

  if (input.value.trim()) {
    chatStorage.addMessage(input.value);
    renderMessages(true);
    saveToLocalStorage();
    input.value = '';
  }
}

function handleKeyPress(event) {
  console.log(event.keyCode);

  if (event.keyCode === 13) {
    form.dispatchEvent(new Event('submit'));
  }

  if (event.keyCode === 27) {
    handleArrowBack();
  }
}

const displayOptions = {
  chats: 1,
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

  if (!urlParams.search) {
    renderChats();
    makeNoneAndVis(displayOptions.chats);

    return;
  }

  const userName = urlParams.searchParams.get(QUERY_CHAT);

  if (chatStorage.containsChat(userName)) {
    //chat
    chatName.innerText = userName;
    chatStorage.chatKey = userName;

    chatLogo.style.backgroundColor = chatStorage.getUserBgColor(userName);

    chatLogo.innerHTML = `<p>${userName.charAt(0)}</p>`;

    makeNoneAndVis(displayOptions.messages);

    renderMessages();

    return;
  }
  //error page

  makeNoneAndVis(displayOptions.blank);
}

function renderChats(searchKey = '') {
  chatsLayout.innerHTML = '';

  for (const chat of chatStorage.getChats(user)) {
    const [contact, msgs] = chat;

    if ((searchKey && contact.startsWith(searchKey)) || !searchKey) {
      const div = Chat.render(
        contact,
        msgs.length > 0 ? msgs[msgs.length - 1]._text : 'пусто...',
        msgs.length > 0 ? msgs[msgs.length - 1]._date : ' ',
        chatStorage.getUserBgColor(contact),
      );
      div.addEventListener('click', () => handleChatRoute(contact));
      chatsLayout.prepend(div);
    }
  }
}

function handleChatRoute(id) {
  history.replaceState(null, '', `${githubRepo}?${QUERY_CHAT}=${id}`);
  render();
}

function renderMessages(isNewUpd) {
  messages.innerHTML = '';

  const messagesIterator = chatStorage.getMessages();

  let item = messagesIterator.next();

  while (!item.done) {
    const { _text, _date, _from } = item.value;

    const nextItem = messagesIterator.next();

    let isNew = false;

    if (nextItem.done && isNewUpd) {
      isNew = true;
    }

    messages.prepend(
      Message.render(
        _text,
        _date,
        _from,
        isNew,
        _from === user ? 'sent-message' : undefined,
      ),
    );
    item = nextItem;
  }
}
