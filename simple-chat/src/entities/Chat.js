import { Message } from './Message';

export class Chat {
  #chatTime;
  constructor(sender, recipient) {
    this._messages = [];
    this._sender = sender;
    this._recipient = recipient;
    this.#chatTime = new Date();
  }
  newMessage(text) {
    const time = this.#chatTime.toLocaleTimeString().substring(0, 5);

    this._messages.push(new Message(text, time, this._sender, this._recipient));
  }
  get recipient() {
    return this._recipient;
  }
  get sender() {
    return this._sender;
  }
}
