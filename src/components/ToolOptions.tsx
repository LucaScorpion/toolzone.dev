import React from 'react';
import { upperCaseFirst } from '../utils/upperCaseFirst';
import { ToolOptionItem } from './ToolOptionItem';
import { ToolOption } from '../tools/toolOptions';

export type OptionValues = Record<string, unknown>;

export interface Props {
  toolOptions: ToolOption[];
  value: OptionValues;
  onChange: (opts: OptionValues) => void;
}

export const ToolOptions: React.FC<Props> = ({
  toolOptions,
  value,
  onChange,
}) => {
  return (
    <div className="tool-options">
      {toolOptions.map((opt) => (
        <div key={opt.name}>
          <label>{upperCaseFirst(opt.name)}</label>
          <ToolOptionItem
            option={opt}
            value={value[opt.name]}
            setValue={(newVal) => onChange({ ...value, [opt.name]: newVal })}
          />
        </div>
      ))}
    </div>
  );
};
