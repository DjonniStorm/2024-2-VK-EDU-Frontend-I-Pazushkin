import { ButtonHTMLAttributes } from 'react';

export const IconButton = ({
  children,
  func,
  isHeader,
  ...args
}: {
  func?: () => void;
  isHeader?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      onClick={func}
      className={`button ${isHeader ? 'header-button' : ''}`}
      {...args}
    >
      {children}
    </button>
  );
};
