export class Chat {
  static render(chatWith, lastMsg) {
    const chatLastMsg = document.createElement('div'),
      timeStamp = document.createElement('div'),
      chatDiv = document.createElement('div'),
      chatName = document.createElement('h3');

    // TODO: add wrappers classes
    chatDiv.classList.add('contacts__list-contact');
    chatName.classList.add('contact__name');
    chatLastMsg.classList.add('contact__last-msg-text');
    timeStamp.classList.add('contact__last-msg-time');
    chatLastMsg.innerText = lastMsg;
    chatName.innerText = chatWith;

    return chatDiv;
  }
}
