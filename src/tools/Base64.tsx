import { Tool } from './Tool';
import { useState } from 'react';
import { TextAreaInput } from '../components/input/TextAreaInput';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';

export const Base64Decode: Tool = {
  name: 'Base64 decode',
  Component: () => {
    const [value, setValue] = useState('');
    const result = useEffectWithCatch(() => atob(value), [value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="U29tZSB0ZXh0IQ==" />
        <TextAreaInput value={result?.toString()} placeholder="Some text!" />
      </div>
    );
  },
};

export const Base64Encode: Tool = {
  name: 'Base64 encode',
  Component: () => {
    const [value, setValue] = useState('');
    const result = useEffectWithCatch(() => btoa(value), [value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="Some text!" />
        <TextAreaInput value={result?.toString()} placeholder="U29tZSB0ZXh0IQ==" />
      </div>
    );
  },
};
