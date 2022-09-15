import { Tool } from './Tool';
import { useState } from 'react';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';
import { TextAreaInput } from '../components/input/TextAreaInput';

type encodeDecodeFn = (input: string) => string;

export function createStringDecodeEncodeTool(
  name: string,
  decodeFn: encodeDecodeFn,
  encodeFn: encodeDecodeFn,
  encodedExample: string,
  decodedExample: string,
  fnOptions?: unknown
): Tool[] {
  // TODO: implement options.

  return [
    {
      name: `${name} decode`,
      Component: () => {
        const [value, setValue] = useState('');
        const result = useEffectWithCatch(() => decodeFn(value), [value]);

        return (
          <div className="panels">
            <TextAreaInput value={value} onChange={setValue} placeholder={encodedExample} />
            <TextAreaInput value={result?.toString()} placeholder={decodedExample} />
          </div>
        );
      },
    },
    {
      name: `${name} encode`,
      Component: () => {
        const [value, setValue] = useState('');
        const result = useEffectWithCatch(() => encodeFn(value), [value]);

        return (
          <div className="panels">
            <TextAreaInput value={value} onChange={setValue} placeholder={decodedExample} />
            <TextAreaInput value={result?.toString()} placeholder={encodedExample} />
          </div>
        );
      },
    },
  ];
}
