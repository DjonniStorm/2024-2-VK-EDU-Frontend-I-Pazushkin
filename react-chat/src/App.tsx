import { ReactNode, useEffect, useState } from 'react';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { useChatContext } from './utils/useChatContext';
import { QUERY_CHAT } from './utils/consts';

export const App = () => {
  const [page, setPage] = useState<ReactNode>(<ContactsPage />);
  const context = useChatContext();

  useEffect(() => {
    const params = new URL(window.location.href);

    const id = params.searchParams.get(QUERY_CHAT);
    if (id && context?.containsChat(id)) {
      context.setPage(<ChatPage />);
      return;
    }
    setPage(<ContactsPage />);
  }, [window.location.href]);

  return page;
  // return <ChatPage />;
};
