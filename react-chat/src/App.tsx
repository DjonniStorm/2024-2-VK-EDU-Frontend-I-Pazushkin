import { ChatPage } from './pages/ChatPage/ChatPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { useChatContext } from './utils/useChatContext';

export const App = () => {
  const context = useChatContext();

  switch (context?.display) {
    case 1:
      return <ContactsPage />;
    case 2:
      return <ChatPage />;
    case 3:
      return <>incorrect</>;
    default:
      return <ContactsPage />;
  }
};
