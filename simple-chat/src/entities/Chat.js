export class Chat {
  static render(chatWith, lastMsg, lastMsgTime) {
    const contactInfoWrapper = document.createElement('div'),
      chatLastMsg = document.createElement('div'),
      contactInfo = document.createElement('div'),
      timeStamp = document.createElement('div'),
      chatDiv = document.createElement('div'),
      chatName = document.createElement('h3'),
      logoDiv = document.createElement('div');

    chatDiv.classList.add('contacts__list-contact');
    logoDiv.classList.add('contacts__list-contact-logo');
    contactInfo.classList.add('contacts__list-contact-info');
    chatName.classList.add('contact__name');
    contactInfoWrapper.classList.add('contact__last-msg');
    chatLastMsg.classList.add('contact__last-msg-text');
    timeStamp.classList.add('contact__last-msg-time');
    chatLastMsg.innerText = lastMsg;
    chatName.innerText = chatWith;
    timeStamp.innerText = lastMsgTime;

    logoDiv.style.backgroundImage = `url("https://i.pravatar.cc/60?random=${Math.random()}")`;

    contactInfoWrapper.appendChild(chatLastMsg);
    contactInfoWrapper.appendChild(timeStamp);

    contactInfo.appendChild(chatName);
    contactInfo.appendChild(contactInfoWrapper);

    chatDiv.appendChild(logoDiv);
    chatDiv.appendChild(contactInfo);

    return chatDiv;
  }
}
