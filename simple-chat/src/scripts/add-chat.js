import { buttonCreate, chatStorage } from './globals';

buttonCreate.addEventListener('click', handleCreateChat);

function handleCreateChat() {
  const chatName = prompt('С кем чат?') ?? prompt('С кем чат?');

  chatStorage.chatKey = chatName;
  chatStorage.addNewChat(chatName);
}
