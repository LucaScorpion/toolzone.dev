import { Tool } from '../Tool';
import { createIOTool, IOFn } from './createIOTool';
import { ToolOption } from '../toolOptions';

export function createDecodeEncodeTools<T>(
  name: string,
  additionalTags: string,
  decodeFn: IOFn<T>,
  encodeFn: IOFn<T>,
  encodedExample: string,
  decodedExample: string,
  toolOptions?: ToolOption[]
): Tool[] {
  return [
    createIOTool(`${name} decode`, additionalTags, decodeFn, encodedExample, decodedExample, toolOptions),
    createIOTool(`${name} encode`, additionalTags, encodeFn, decodedExample, encodedExample, toolOptions),
  ];
}
