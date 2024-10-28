import { ChangeEvent, KeyboardEvent } from 'react';
import styles from './SearchChatInput.module.scss';

export const SearchChatInput = ({
  onValueChange,
}: {
  onValueChange: (value: string) => void;
}) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <input
      className={styles['input']}
      onChange={onChange}
      placeholder="Поиск"
      type="text"
      autoComplete="on"
      spellCheck="true"
    />
  );
};
