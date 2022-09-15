import { Tool } from './Tool';
import { createStringTool } from './createStringTool';

type encodeDecodeFn = (input: string) => string;

export function createStringDecodeEncodeTool(
  name: string,
  decodeFn: encodeDecodeFn,
  encodeFn: encodeDecodeFn,
  encodedExample: string,
  decodedExample: string,
  fnOptions?: unknown
): Tool[] {
  return [
    createStringTool(`${name} decode`, decodeFn, encodedExample, decodedExample, fnOptions),
    createStringTool(`${name} encode`, encodeFn, decodedExample, encodedExample, fnOptions),
  ];
}
