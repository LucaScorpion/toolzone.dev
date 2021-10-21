import { Tool } from './Tool';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { useService } from '../hooks/useService';
import { JsonService } from '../services/JsonService';

export const JsonMinifier: Tool = {
  name: 'JSON minifier',
  Component: () => {
    const service = useService(JsonService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(service.minify(value));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value]);

    return (
      <div>
        <TextAreaInput value={value} onChange={setValue} />
        <TextAreaInput value={result} onChange={setResult} />
      </div>
    );
  },
};
