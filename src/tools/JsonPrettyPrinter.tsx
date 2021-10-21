import { Tool } from './Tool';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { useService } from '../hooks/useService';
import { JsonService } from '../services/JsonService';

export const JsonPrettyPrinter: Tool = {
  name: 'JSON pretty printer',
  Component: () => {
    const service = useService(JsonService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(service.prettyPrint(value, 2));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value]);

    return (
      <div>
        <TextAreaInput value={value} onChange={setValue} placeholder={'{"type":"json","pretty":true}'} />
        <TextAreaInput value={result} onChange={setResult} placeholder={'{\n  "type": "json",\n  "pretty": true\n}'} />
      </div>
    );
  },
};
