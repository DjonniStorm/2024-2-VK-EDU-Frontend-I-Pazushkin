import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '../IconButton/IconButton';
import { UserSelect } from '../UserSelect/UserSelect';
import { SearchChatInput } from '../SearchChatInput/SearchChatInput';
import styles from './ContactsHeader.module.scss';

export const ContactsHeader = () => {
  const onUserChange = (option: string) => {
    console.log('user changed', option);
  };

  const onInputValueChanged = (value: string) => {
    console.log(value);
  };
  return (
    <div className={styles['contacts__header']}>
      <IconButton isHeader>
        <MenuIcon />
      </IconButton>
      <div className={styles['contacts__header-username']}>
        <UserSelect onUserChange={onUserChange} options={['Илья', 'Артём']} />
      </div>
      <div className={styles['contacts__header-search']}>
        <SearchChatInput onValueChange={onInputValueChanged} />
      </div>
    </div>
  );
};
