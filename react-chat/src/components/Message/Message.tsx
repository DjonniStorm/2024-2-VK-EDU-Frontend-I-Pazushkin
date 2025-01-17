export const Message = ({
  text,
  date,
  from,
  isNew,
  classList = 'received-message',
}: {
  text: string;
  date: string;
  from: string;
  isNew?: boolean;
  classList?: string;
}) => {
  return (
    <div className={`${classList} ${isNew ? 'new-message' : ''}`}>
      <p>{from}</p>
      <p>{text}</p>
      <p>{date}</p>
    </div>
  );
};
