import { ButtonHTMLAttributes } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import styles from './CreateChatButton.module.scss';

export const CreateChatButton = ({
  onCreateChatClick,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  onCreateChatClick: () => void;
}) => {
  return (
    <button
      {...args}
      onClick={onCreateChatClick}
      className={styles['create-contact-btn']}
    >
      <CreateIcon
        sx={{ fontSize: '38px' }}
        className={styles['create-contact-btn-icon']}
      />
    </button>
  );
};
