import { user as userName, chatStorage, messages } from './globals';
import { chatUserName, chatsLayout, input, form } from './nodes';
import '../styles/index.css';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';

document.addEventListener('DOMContentLoaded', () => {
  // chatStorage.addNewChat('андрей');
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
    chatStorage.addMessage(input.value);
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
  renderChats();
  if (window.location.search.length) {
    renderMessages();

    return;
  }
}

function renderMessages() {}

function renderChats() {
  // debugger;
  chatStorage.chatKey = 'aylhe';
  chatStorage.addMessage('adc');
  chatStorage.addMessage('adc2');
  chatStorage.addMessage('adc3');
  chatStorage.addMessage('adc4');
  chatStorage.addMessage('adc5');
  console.log('здесь');

  for (const chat of chatStorage.getChats()) {
    chatsLayout.appendChild(chat);
    console.log(chat);
  }
}
