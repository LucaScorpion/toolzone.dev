export type ToolOption = StringToolOption | NumberToolOption;

interface BaseToolOption {
  name: string;
  type: string;
}

export interface StringToolOption extends BaseToolOption {
  type: 'string';
  defaultValue: string;
}

export interface NumberToolOption extends BaseToolOption {
  type: 'number';
  defaultValue: number;
  min?: number;
  max?: number;
}
