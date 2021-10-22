import React, { useState } from 'react';

export interface Props {
  className?: string;
  value?: number;
  onChange: (value: number) => void;
  autoFocus?: boolean;
  min?: number;
  max?: number;
}

export const NumberInput: React.FC<Props> = ({ onChange, ...props }) => {
  const [stringValue, setStringValue] = useState((props.value ?? '').toString());

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
