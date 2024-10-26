import { useState } from 'react';
import { SearchChatButton } from './components/SearchChatButton/SearchChatButton';

enum DisplayOptions {
  contacts,
  chat,
  none,
}

export const App = () => {
  const [display, setDisplay] = useState<DisplayOptions>();
  return (
    <div>{display === DisplayOptions.contacts && <SearchChatButton />}</div>
  );
};
