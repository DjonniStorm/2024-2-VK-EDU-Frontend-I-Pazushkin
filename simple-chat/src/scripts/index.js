import {
  user as userName,
  chatUserName,
  chatStorage,
  messages,
  input,
  form,
} from './elements';
import '../styles/index.css';
import '../styles/personal-chat.css';
import '../styles/contacts-list.css';

document.addEventListener('DOMContentLoaded', () => {
  renderMessages();
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

function renderMessages() {
  try {
    messages.innerHTML = '';
  } catch (e) {
    console.warn(e);
  }
}
