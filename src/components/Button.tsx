import React, { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, ...props }) => (
  <button {...props} className="button">
    {children}
  </button>
);
