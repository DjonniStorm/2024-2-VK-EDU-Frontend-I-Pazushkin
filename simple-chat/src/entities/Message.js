export class Message {
  constructor(text, date, from, to, classList) {
    this._text = text;
    this._date = date;
    this._from = from;
    this._to = to;
    this._classList = classList;
  }
  render() {
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message', this._classList);

    const messageSender = document.createElement('p'),
      messageText = document.createElement('p'),
      messageTime = document.createElement('p');

    messageSender.innerText = this._from;
    messageText.innerText = this._text;
    messageTime.innerText = this._date;

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
