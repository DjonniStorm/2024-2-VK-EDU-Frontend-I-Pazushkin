import { ChangeEvent, FormEvent, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { Attachment } from '@mui/icons-material';
import styles from './MessageForm.module.scss';

export const MessageForm = ({
  onNewMessage,
  placeholder,
}: {
  onNewMessage: (message: string) => void;
  placeholder: string;
}) => {
  const [message, setMessage] = useState<string>('');

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('onFormSubmit', message);
    if (message.trim()) {
      onNewMessage(message);
    }
    setMessage('');
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('onInputChange', e.target.value);
    setMessage(e.target.value);
  };

  return (
    <form className={styles['form']} onSubmit={onFormSubmit}>
      <input
        className={styles['form-input']}
        value={message}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      <IconButton>
        <Attachment />
      </IconButton>
    </form>
  );
};
