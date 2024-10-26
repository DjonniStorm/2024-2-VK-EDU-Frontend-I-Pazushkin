import { SelectHTMLAttributes } from 'react';

export const UserSelect = ({
  options,
  func,
  ...args
}: SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
  func: (option: string) => void;
}) => {
  return (
    <select {...args}>
      {options.map(elem => (
        <option key={elem} onSelect={() => func(elem)}>
          {elem}
        </option>
      ))}
    </select>
  );
};
