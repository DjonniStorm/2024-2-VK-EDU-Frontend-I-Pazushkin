import { ChangeEvent, SelectHTMLAttributes } from 'react';
import styles from './UserSelect.module.scss';

export const UserSelect = ({
  options,
  onUserChange,
  ...args
}: SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
  onUserChange: (option: string) => void;
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    onUserChange(e.target.value);
  };

  return (
    <select {...args} onChange={handleChange} className={styles['select']}>
      {options.map(elem => (
        <option key={elem} value={elem}>
          {elem}
        </option>
      ))}
    </select>
  );
};
