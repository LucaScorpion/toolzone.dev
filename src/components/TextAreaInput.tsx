import React from 'react';

export interface Props {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  placeholder?: string;
}

export const TextAreaInput: React.FC<Props> = ({ onChange, ...props }) => (
  <textarea {...props} onChange={(e) => onChange && onChange(e.currentTarget.value)} readOnly={!onChange} />
);
