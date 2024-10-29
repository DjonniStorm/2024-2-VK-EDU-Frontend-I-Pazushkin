import { ButtonHTMLAttributes } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import styles from './CreateChatButton.module.scss';

export const CreateChatButton = ({
  func,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement> & { func: () => void }) => {
  return (
    <button {...args} onClick={func} className={styles['create-contact-btn']}>
      <CreateIcon
        sx={{ fontSize: '38px' }}
        className={styles['create-contact-btn-icon']}
      />
    </button>
  );
};
