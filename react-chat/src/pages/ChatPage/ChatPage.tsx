import { ChatHeader } from '../../components/ChatHeader/ChatHeader';
import styles from './ChatPage.module.scss';
import { MessageForm } from '../../components/MessageForm/MessageForm';
import { useChatContext } from '../../utils/useChatContext';
import { changeUrl } from '../../utils/urlChange';
import { displayOptions } from '../../utils/consts';
import { Message } from '../../components/Message/Message';

export const ChatPage = () => {
  const context = useChatContext();

  const arrowBackClick = () => {
    changeUrl({});
    context?.setDisplay(displayOptions.contacts);
  };

  const onNewMessage = (text: string) => {
    context?.addMessage(text);
    console.log(text);
  };
  return (
    <div className={styles['chat']}>
      <ChatHeader
        contact={context?.chatKey || 'Илья'}
        arrowBackClick={arrowBackClick}
      />
      <div className={styles['chat__messages-layout']}>
        {context
          ?.getMessages()
          ?.map(({ text, timestamp, sender }) => (
            <Message
              key={timestamp}
              text={text}
              date={timestamp}
              from={sender}
            />
          ))}
      </div>
      <MessageForm
        onNewMessage={onNewMessage}
        placeholder={'Введите сообщение'}
      />
    </div>
  );
};
