import { Tool } from './Tool';
import { createStringTool } from './createStringTool';
import { ToolOption } from './toolOptions';

type encodeDecodeFn = (input: string) => string;

export function createStringDecodeEncodeTool(
  name: string,
  decodeFn: encodeDecodeFn,
  encodeFn: encodeDecodeFn,
  encodedExample: string,
  decodedExample: string,
  toolOptions?: ToolOption[]
): Tool[] {
  return [
    createStringTool(`${name} decode`, decodeFn, encodedExample, decodedExample, toolOptions),
    createStringTool(`${name} encode`, encodeFn, decodedExample, encodedExample, toolOptions),
  ];
}
