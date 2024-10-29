import { ChangeEvent, InputHTMLAttributes } from 'react';

export const SearchInput = ({
  onValueChange,
  placeholder,
  className,
  ...args
}: {
  onValueChange: (value: string) => void;
  placeholder: string;
} & InputHTMLAttributes<HTMLInputElement>) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <input
      {...args}
      className={className}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="on"
      spellCheck="true"
    />
  );
};
