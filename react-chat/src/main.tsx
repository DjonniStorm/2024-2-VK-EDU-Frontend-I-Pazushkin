import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App.tsx';
import { ChatProvider } from './chatProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </StrictMode>,
);
