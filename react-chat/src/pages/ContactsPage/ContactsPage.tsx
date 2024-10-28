import { IconButton } from '../../components/IconButton/IconButton';
import { Contact } from '../../components/Contact/Contact';
import { ContactsHeader } from '../../components/ContactsHeader/ContactHeader';
import styles from './ContactPage.module.scss';
import { Edit } from '@mui/icons-material';

export const ContactsPage = () => {
  return (
    <>
      <div className={styles['contacts']}>
        <ContactsHeader />
        <Contact chatWith={'Артём'} bgColor={'rgb(100, 120, 32)'} />
        <IconButton>
          <Edit />
        </IconButton>
      </div>
    </>
  );
};
