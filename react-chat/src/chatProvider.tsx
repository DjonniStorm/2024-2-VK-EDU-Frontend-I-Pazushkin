import { ReactNode, useState } from 'react';
import { ChatContext } from './utils/context';
import { Message, UserChats } from './utils/types';

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<UserChats>({});
  const [chatKey, setChatKey] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const addChat = (chatWith: string) => {
    setChatKey(chatWith);
    console.log('addChat', chatWith, chatKey);
    // Логика добавления чата
  };

  const addMessage = (messageText: string) => {
    console.log(messageText);
    // Логика добавления сообщения
  };

  const getMessages = (chatWith: string): Message[] => {
    throw new Error();
  };

  const getChats = (): UserChats => {
    throw new Error();
  };

  return (
    <ChatContext.Provider
      value={{
        users,
        currentUser,
        setCurrentUser,
        addChat,
        addMessage,
        getMessages,
        getChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
