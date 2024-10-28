import styles from './Contact.module.scss';

export const Contact = ({
  chatWith,
  lastMsgText,
  lastMsgTime,
  bgColor,
}: {
  chatWith: string;
  lastMsgText?: string;
  lastMsgTime?: string;
  bgColor: string;
}) => {
  return (
    <div className={styles['contact']}>
      <div
        className={styles['contact__logo']}
        style={{ backgroundColor: bgColor }}
      >
        <p className={styles['contact__logo-text']}>{chatWith.charAt(0)}</p>
      </div>
      <div className={styles['contact__info']}>
        <h3 className={styles['contact__info-name']}>{chatWith}</h3>
        <div className={styles['contact__info-last-msg']}>
          <div className={styles['contact__info-last-msg-text']}>
            {lastMsgText || 'пусто...'}
          </div>
          <div className={styles['contact__info-last-msg-time']}>
            {lastMsgTime || ''}
          </div>
        </div>
      </div>
    </div>
  );
};
