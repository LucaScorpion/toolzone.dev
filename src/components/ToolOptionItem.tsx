import React from 'react';
import {
  EnumToolOption,
  NumberToolOption,
  StringToolOption,
  ToolOption,
} from '../tools/toolOptions';
import { NumberInput } from './input/NumberInput';
import { TextInput } from './input/TextInput';
import { SelectInput } from './input/SelectInput';

export interface Props<T extends ToolOption = ToolOption> {
  option: T;
  value: unknown;
  setValue: (newVal: unknown) => void;
}

export const ToolOptionItem: React.FC<Props> = ({
  option,
  value,
  setValue,
}) => {
  switch (option.type) {
    case 'string':
      return (
        <StringToolOptionItem
          option={option}
          value={value}
          setValue={setValue}
        />
      );
    case 'number':
      return (
        <NumberToolOptionItem
          option={option}
          value={value}
          setValue={setValue}
        />
      );
    case 'enum':
      return (
        <EnumToolOptionItem option={option} value={value} setValue={setValue} />
      );
    default:
      throw new Error(`Unknown option type: ${(option as ToolOption).type}`);
  }
};

const StringToolOptionItem: React.FC<Props<StringToolOption>> = ({
  option,
  value,
  setValue,
}) => (
  <TextInput
    value={value as string}
    onChange={setValue}
    placeholder={option.defaultValue}
  />
);

const NumberToolOptionItem: React.FC<Props<NumberToolOption>> = ({
  option,
  value,
  setValue,
}) => (
  <NumberInput
    value={value as number}
    onChange={setValue}
    placeholder={option.defaultValue.toString()}
    min={option.min}
    max={option.max}
  />
);

const EnumToolOptionItem: React.FC<Props<EnumToolOption>> = ({
  option,
  value,
  setValue,
}) => (
  <SelectInput
    options={Object.entries(option.options).map(([value, label]) => ({
      value,
      label,
    }))}
    value={value as string}
    onChange={setValue}
  />
);
