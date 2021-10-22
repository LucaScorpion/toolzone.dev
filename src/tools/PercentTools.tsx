import { Tool } from './Tool';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { useService } from '../hooks/useService';
import { PercentService } from '../services/PercentService';

export const PercentEncoder: Tool = {
  name: 'Percent encoder',
  Component: () => {
    const service = useService(PercentService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(service.encode(value));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="some value?thing=3%" />
        <TextAreaInput value={result} onChange={setResult} placeholder="some%20value%3Fthing%3D3%25" />
      </div>
    );
  },
};

export const PercentDecoder: Tool = {
  name: 'Percent decoder',
  Component: () => {
    const service = useService(PercentService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(service.decode(value));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="some%20value%3Fthing%3D3%25" />
        <TextAreaInput value={result} onChange={setResult} placeholder="some value?thing=3%" />
      </div>
    );
  },
};
