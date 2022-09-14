import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

type HtmlTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

export interface Props extends Omit<HtmlTextAreaProps, 'onChange'> {
  onChange?: (value: string) => void;
}

export const TextAreaInput: React.FC<Props> = ({ onChange, ...props }) => (
  <textarea {...props} onChange={(e) => onChange && onChange(e.currentTarget.value)} readOnly={!onChange} />
);
