import { Contact } from '../../components/Contact/Contact';
import { ContactsHeader } from '../../components/ContactsHeader/ContactsHeader';
import styles from './ContactPage.module.scss';
import { CreateChatButton } from '../../components/CreateChatButton/CreateChatButton';
import { useContext } from 'react';
import { ChatContext } from '../../utils/context';

export const ContactsPage = () => {
  const check = useContext(ChatContext);
  console.log('ContactsPage', check, check?.addChat('123'));

  return (
    <>
      <div className={styles['contacts']}>
        <ContactsHeader />
        <div className={styles['contacts__list']}>
          <Contact chatWith={'Артём'} bgColor={'rgb(100, 120, 32)'} />
        </div>
        <CreateChatButton
          func={function (): Error {
            throw new Error('Function not implemented.');
          }}
        />
      </div>
    </>
  );
};
