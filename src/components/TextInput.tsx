import React from 'react';

export interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string;
}

export const TextInput: React.FC<Props> = ({ onChange, ...props }) => (
  <input {...props} onChange={(e) => onChange(e.currentTarget.value)} />
);
