import { ReactNode, useEffect, useState } from 'react';
import { Message, UserChats } from './utils/types';
import { ChatContext } from './utils/context';
import { changeUrl } from './utils/urlChange';
import { displayOptions } from './utils/consts';

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [store, setStore] = useState<{
    [user: string]: Map<string, Message[]>;
  }>({});
  const [chatKey, setChatKey] = useState<string>(() => '');
  const [currentUser, setCurrentUser] = useState<string>(() => '');

  const [display, setDisplay] = useState(() => displayOptions.contacts);

  useEffect(() => {
    changeUrl({});

    let user = prompt('Введите имя пользователя') || Math.random().toString();
    setCurrentUser(user);
    if (!store[user]) {
      setStore(chats => ({
        ...chats,
        [user]: new Map<string, Message[]>(),
      }));
    }
  }, []);

  const handleCreateChat = (name: string) => {
    console.log(name);

    setStore(chats => ({
      ...chats,
      [currentUser]: new Map<string, Message[]>().set(name, []),
      [name]: new Map<string, Message[]>().set(currentUser, []),
    }));

    setDisplay(displayOptions.chat);
    changeUrl({ params: name });
  };

  const handleAddMessage = ({
    text,
    from,
    to,
    sender,
  }: {
    text: string;
    from: string;
    to: string;
    sender: string;
  }) => {
    const timestamp = new Date().toLocaleTimeString();

    console.log(text, from, to, sender, store);

    setStore(stor => {
      const newStore = { ...stor };
      if (newStore[from] && newStore[from].get(to)) {
        const prev = newStore[from].get(to);

        if (prev) {
          newStore[from].delete(to);

          prev.push({ text, timestamp, sender });

          newStore[from].set(chatKey, prev);

          return newStore;
        }
      }

      newStore[from].set(chatKey, [{ text, timestamp, sender }]);
      return newStore;
    });
  };

  const changeUser = (userName: string) => {
    setCurrentUser(userName);
  };

  const containsChat = (userName: string) => {
    console.log(store);
    return typeof store[userName] !== 'undefined';
  };

  const createChat = (chatName: string) => {
    while (store[chatName]) {
      const conf = confirm(
        `Чат ${chatName} уже существует, создать ${chatName}2?`,
      );
      if (conf && !store[`${chatName}2`]) {
        handleCreateChat(`${chatName}2`);
        setChatKey(`${chatName}2`);
        return;
      }
      chatName += '2';
    }
    handleCreateChat(chatName);
    setChatKey(chatName);
    console.log(store);
  };

  const getMessages = () => store[currentUser].get(chatKey);

  const getChats = () => store[currentUser];

  const addMessage = (messageText: string) => {
    handleAddMessage({
      text: messageText,
      from: currentUser,
      to: chatKey,
      sender: currentUser,
    });
    handleAddMessage({
      text: messageText,
      from: chatKey,
      to: currentUser,
      sender: currentUser,
    });
  };

  return (
    <ChatContext.Provider
      value={{
        createChat,
        addMessage,
        setCurrentUser,
        containsChat,
        setChatKey,
        display,
        setDisplay,
        getMessages,
        chatKey,
        getChats,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
