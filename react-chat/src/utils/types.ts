export interface Message {
  text: string;
  timestamp: string;
  sender: string;
}

export interface UserChats {
  [username: string]: Map<string, Message[]>;
}

export interface ChatContextType {
  users: UserChats;
  currentUser: string | null;
  setCurrentUser: (user: string) => void;
  addChat: (chatWith: string) => void;
  addMessage: (messageText: string) => void;
  getMessages: (chatWith: string) => Message[];
  getChats: () => UserChats;
}
