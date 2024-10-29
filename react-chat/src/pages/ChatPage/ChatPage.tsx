import { Attachment } from '@mui/icons-material';
import { ChatHeader } from '../../components/ChatHeader/ChatHeader';
import { IconButton } from '../../components/IconButton/IconButton';
import { Input } from '../../components/SearchInput/SearchInput';
import styles from './ChatPage.module.scss';
import { MessageForm } from '../../components/MessageForm/MessageForm';

export const ChatPage = () => {
  const onNewMessage = (text: string) => {
    console.log(text);
  };
  return (
    <div className={styles['chat']}>
      <ChatHeader contact="Артём" />
      <div className={styles['chat__messages-layout']}></div>
      <MessageForm
        onNewMessage={onNewMessage}
        placeholder={'Введите сообщение'}
      />
    </div>
  );
};
