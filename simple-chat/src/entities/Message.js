export class Message {
  constructor(text, date, from) {
    this._text = text;
    this._date = date;
    this._from = from;
  }
  static render(text, date, from, classList = 'received-message') {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message', classList);

    const messageSender = document.createElement('p'),
      messageText = document.createElement('p'),
      messageTime = document.createElement('p');

    messageSender.innerText = from;
    messageText.innerText = text;
    messageTime.innerText = date;

    messageText.classList.add('message__content--text');
    [messageSender, messageText, messageTime].forEach(dataElem => {
      dataElem.classList.add('message__content');
      messageDiv.appendChild(dataElem);
    });

    return messageDiv;
  }
  get messageTime() {
    return this._date;
  }
  get messageText() {
    return this._text;
  }
}
