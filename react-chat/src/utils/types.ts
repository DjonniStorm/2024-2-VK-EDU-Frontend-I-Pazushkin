import { ReactNode } from 'react';

export interface Message {
  text: string;
  timestamp: string;
  sender: string;
}

export type NEED_TO_CHANGE_NAME = ReactNode;

export interface UserChats {
  [username: string]: Map<string, Message[]>;
}

export interface ChatContextType {
  createChat: (chatName: string) => void;
  addMessage: (messageText: string) => void;
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
  containsChat: (userName: string) => boolean;
  setChatKey: React.Dispatch<React.SetStateAction<string>>;
  display: number;
  setDisplay: React.Dispatch<React.SetStateAction<number>>;
  getMessages: () => Message[] | undefined;
  chatKey: string;
  getChats: () => Map<string, Message[]>;
}
