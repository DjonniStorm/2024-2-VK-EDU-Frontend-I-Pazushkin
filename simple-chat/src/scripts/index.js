import { getFromLocalStorage, saveToLocalStorage } from './storage';
import { messages, input, form } from './elements';
import '../styles/index.css';

document.addEventListener('DOMContentLoaded', renderMessages);
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

function handleSubmit(event) {
  event.preventDefault();

  if (input.value.trim()) {
    saveToLocalStorage(input.value);
    input.value = '';
    renderMessages();
  }
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    form.dispatchEvent(new Event('submit'));
  }
}

function renderMessages() {
  try {
    const storedMessages = getFromLocalStorage();

    messages.innerHTML = '';
    storedMessages.forEach(elem => {
      const messageDiv = document.createElement('div');

      messageDiv.classList.add('message', 'sent-message');

      const messageSender = document.createElement('p'),
        messageText = document.createElement('p'),
        messageTime = document.createElement('p');

      messageSender.innerText = elem.from;
      messageText.innerText = elem.text;
      messageTime.innerText = elem.time;

      messageText.classList.add('message__content--text');
      [messageSender, messageText, messageTime].forEach(dataElem => {
        dataElem.classList.add('message__content');
        messageDiv.appendChild(dataElem);
      });

      messages.prepend(messageDiv);
    });
  } catch (e) {
    console.warn(e);
  }
}
