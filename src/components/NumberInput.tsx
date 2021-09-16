import React, { useState } from 'react';

export interface Props {
  value?: number;
  onChange: (value: number) => void;
  autoFocus?: boolean;
}

export const NumberInput: React.FC<Props> = ({ onChange, ...props }) => {
  const [stringValue, setStringValue] = useState((props.value ?? '').toString());

  return (
    <input
      {...props}
      value={stringValue}
      onChange={(e) => {
        const stringVal = e.currentTarget.value;
        setStringValue(stringVal);
        onChange(parseFloat(stringVal));
      }}
    />
  );
};
