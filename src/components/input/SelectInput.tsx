import React from 'react';

export interface Props {
  className?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export interface Option {
  value: string;
  label: string;
}

export const SelectInput: React.FC<Props> = ({ options, onChange, ...props }) => (
  <select {...props} onChange={(e) => onChange(e.currentTarget.value)}>
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);
