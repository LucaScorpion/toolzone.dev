import { Tool } from './Tool';
import { useState } from 'react';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';
import { TextAreaInput } from '../components/input/TextAreaInput';

type stringFn = (input: string) => string;

export function createStringTool(
  name: string,
  toolFn: stringFn,
  inputExample: string,
  outputExample: string,
  fnOptions?: unknown
): Tool {
  // TODO: implement options.

  return {
    name,
    Component: () => {
      const [value, setValue] = useState('');
      const result = useEffectWithCatch(() => toolFn(value), [value]);

      return (
        <div className="panels">
          <TextAreaInput value={value} onChange={setValue} placeholder={inputExample} />
          <TextAreaInput value={result?.toString()} placeholder={outputExample} />
        </div>
      );
    },
  };
}
