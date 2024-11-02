import { Contact } from '../../components/Contact/Contact';
import { ContactsHeader } from '../../components/ContactsHeader/ContactsHeader';
import styles from './ContactPage.module.scss';
import { CreateChatButton } from '../../components/CreateChatButton/CreateChatButton';
import { useContext } from 'react';
import { ChatContext } from '../../utils/context';
import { useChatContext } from '../../utils/useChatContext';

export const ContactsPage = () => {
  const context = useChatContext();

  const handleCreateChat = () => {
    context?.createChat(
      prompt('Введите название чата') || Math.random().toString(),
    );
  };

  return (
    <>
      <div className={styles['contacts']}>
        <ContactsHeader />
        <div className={styles['contacts__list']}>
          <Contact chatWith={'Артём'} bgColor={'rgb(100, 120, 32)'} />
        </div>
        <CreateChatButton onCreateChatClick={handleCreateChat} />
      </div>
    </>
  );
};
