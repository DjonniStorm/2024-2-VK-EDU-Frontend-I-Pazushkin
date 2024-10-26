import { CreateChatButton } from '../../components/CreateChatButton/CreateChatButton';
import { MenuButton } from '../../components/MenuButton/MenuButton';

export const ContactsPage = () => {
  return (
    <div className="contacts">
      <div className="contacts__header">
        <MenuButton />
      </div>
      <div className="contacts__header-username"></div>
    </div>
  );
};
