import { Tool } from '../Tool';
import { createStringTool, StringFn } from './createStringTool';
import { ToolOption } from '../toolOptions';

export function createStringDecodeEncodeTools<T>(
  name: string,
  decodeFn: StringFn<T>,
  encodeFn: StringFn<T>,
  encodedExample: string,
  decodedExample: string,
  toolOptions?: ToolOption[]
): Tool[] {
  return [
    createStringTool(`${name} decode`, decodeFn, encodedExample, decodedExample, toolOptions),
    createStringTool(`${name} encode`, encodeFn, decodedExample, encodedExample, toolOptions),
  ];
}
