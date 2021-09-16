import React from 'react';

export interface Props {
  onClick: () => void;
}

export const Button: React.FC<Props> = ({ children, ...props }) => (
  <button {...props} className="button">
    {children}
  </button>
);
