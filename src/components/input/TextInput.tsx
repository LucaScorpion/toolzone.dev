import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type HtmlInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export interface Props extends Omit<HtmlInputProps, 'onChange' | 'type'> {
  onChange: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({ onChange, ...props }) => (
  <input {...props} onChange={(e) => onChange(e.currentTarget.value)} />
);
