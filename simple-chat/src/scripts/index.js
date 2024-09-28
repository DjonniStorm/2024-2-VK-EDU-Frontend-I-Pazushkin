import '../styles/index.css';
import { form, input, messages } from './elements';
import { saveToLocalStorage, getFromLocalStorage } from './storage';

document.addEventListener('DOMContentLoaded', renderMessages);
form.addEventListener('submit', handleSubmit);
form.addEventListener('keypress', handleKeyPress);

function handleSubmit(event) {
    event.preventDefault();
    console.log(input.value.trim(), 'trim');
    if (input.value.trim()) {
        saveToLocalStorage(input.value);
        input.value = '';
        console.log('render');
        renderMessages();
    }
}

function handleKeyPress(event) {
    console.log('click', this);
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

            const messageText = document.createElement('p'),
                messageSender = document.createElement('p'),
                messageTime = document.createElement('p');
            messageSender.innerText = elem.from;
            messageText.innerText = elem.text;
            messageTime.innerText = elem.time;
            messageText.classList.add('message__content--text');
            [messageSender, messageText, messageTime].forEach(dataElem => {
                dataElem.classList.add('message__content');
                messageDiv.appendChild(dataElem);
            });
            messages.appendChild(messageDiv);
        });
    } catch (e) {
        console.warn(e);
    }
}
