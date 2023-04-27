import React, { useState } from 'react';
import { HtmlInputProps } from './TextInput';

export interface Props extends Omit<HtmlInputProps, 'onChange' | 'type'> {
  value?: number;
  onChange: (value: number) => void;
}

export const NumberInput: React.FC<Props> = ({ onChange, ...props }) => {
  const [stringValue, setStringValue] = useState(
    (props.value ?? '').toString()
  );

  return (
    <input
      {...props}
      type="number"
      value={stringValue}
      onChange={(e) => {
        const stringVal = e.currentTarget.value;
        setStringValue(stringVal);
        onChange(parseFloat(stringVal));
      }}
    />
  );
};
