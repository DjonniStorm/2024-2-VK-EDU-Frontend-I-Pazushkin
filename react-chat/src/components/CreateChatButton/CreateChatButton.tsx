import { ButtonHTMLAttributes } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import style from './CreateChatButton.scss';

export const CreateChatButton = ({
  func,
  ...args
}: ButtonHTMLAttributes<HTMLButtonElement> & { func: () => void }) => {
  return (
    <button {...args} onClick={func} className={style['1']}>
      <CreateIcon />
    </button>
  );
};
