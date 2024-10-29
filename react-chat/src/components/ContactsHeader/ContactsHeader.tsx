import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '../IconButton/IconButton';
import { UserSelect } from '../UserSelect/UserSelect';
import { Input } from '../SearchInput/SearchInput';
import styles from './ContactsHeader.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export const ContactsHeader = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const onUserChange = (option: string) => {
    console.log('user changed', option);
  };

  const onInputValueChanged = (value: string) => {
    setInputValue(value);
    console.log(value);
  };
  return (
    <div className={styles['contacts__header']}>
      <IconButton isHeader title="Пока не работает">
        <MenuIcon />
      </IconButton>
      <div className={styles['contacts__header-username']}>
        <UserSelect
          title="Смена пользователя"
          onUserChange={onUserChange}
          options={['Илья', 'Артём']}
        />
      </div>
      <div className={styles['contacts__header-search']}>
        <Input
          placeholder="Поиск чатов"
          className={styles['contacts__header-search-input']}
          onValueChange={onInputValueChanged}
        />
        <IconButton isHeader title="Поиск чатов">
          <SearchIcon />
        </IconButton>
      </div>
    </div>
  );
};
