export type ToolOption = StringToolOption | NumberToolOption | EnumToolOption;

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

export interface EnumToolOption extends BaseToolOption {
  type: 'enum';
  options: Record<string, string>;
  defaultValue: string;
}
