import React from 'react';

export interface Props {
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
}

export const TextInput: React.FC<Props> = ({ onChange, ...props }) => (
  <input {...props} onChange={(e) => onChange(e.currentTarget.value)} />
);
