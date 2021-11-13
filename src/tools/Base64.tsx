import { Tool } from './Tool';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';

export const Base64Decode: Tool = {
  name: 'Base64 decode',
  Component: () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(atob(value));
      } catch (e) {
        setResult(e.message);
      }
    }, [value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="U29tZSB0ZXh0IQ==" />
        <TextAreaInput value={result} onChange={setResult} placeholder="Some text!" />
      </div>
    );
  },
};

export const Base64Encode: Tool = {
  name: 'Base64 encode',
  Component: () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      setResult(btoa(value));
    }, [value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="Some text!" />
        <TextAreaInput value={result} onChange={setResult} placeholder="U29tZSB0ZXh0IQ==" />
      </div>
    );
  },
};
