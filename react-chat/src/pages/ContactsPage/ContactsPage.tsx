import { Contact } from '../../components/Contact/Contact';
import { ContactsHeader } from '../../components/ContactsHeader/ContactsHeader';
import styles from './ContactPage.module.scss';
import { CreateChatButton } from '../../components/CreateChatButton/CreateChatButton';
import { useContext, useEffect } from 'react';
import { ChatContext } from '../../utils/context';
import { useChatContext } from '../../utils/useChatContext';

export const ContactsPage = () => {
  const context = useChatContext();

  const handleCreateChat = () => {
    context?.createChat(
      prompt('Введите название чата') || Math.random().toString(),
    );
  };

  useEffect(() => {
    if (context) {
      if (context.getChats()) {
        Array.from(context.getChats())?.map(([user, messages]) =>
          messages?.map(message => console.log(user, message, messages)),
        );
      }
    }
  }, []);

  return (
    <>
      <div className={styles['contacts']}>
        <ContactsHeader />
        <div className={styles['contacts__list']}></div>
        <CreateChatButton onCreateChatClick={handleCreateChat} />
      </div>
    </>
  );
};
