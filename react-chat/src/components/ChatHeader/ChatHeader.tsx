import { ArrowBack, MoreVert, Search } from '@mui/icons-material';
import { IconButton } from '../IconButton/IconButton';
import styles from './ChatHeader.module.scss';

export const ChatHeader = ({ contact }: { contact: string }) => {
  return (
    <div className={styles['chat__header']}>
      <div className={styles['chat__header-transition']}>
        <IconButton isHeader title="Назад">
          <ArrowBack />
        </IconButton>
        <div className={styles['chat__header-info']}>
          <div className={styles['chat__header-info-logo']}>
            <p className={styles['chat__header-info-logo-letter']}>
              {contact.charAt(0)}
            </p>
          </div>
          <div className={styles['chat__header-info-status']}>
            <h3 className={styles['chat__header-info-status-contact']}>
              {contact}
            </h3>
          </div>
        </div>
      </div>
      <div className={styles['chat__header-tools']}>
        <IconButton isHeader>
          <Search />
        </IconButton>
        <IconButton isHeader>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
};
