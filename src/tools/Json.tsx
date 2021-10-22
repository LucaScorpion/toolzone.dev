import { Tool } from './Tool';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { useService } from '../hooks/useService';
import { JsonService } from '../services/JsonService';

export const JsonMinify: Tool = {
  name: 'JSON minify',
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
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder={'{\n  "type": "json",\n  "pretty": true\n}'} />
        <TextAreaInput value={result} onChange={setResult} placeholder={'{"type":"json","pretty":true}'} />
      </div>
    );
  },
};

export const JsonPrettyPrint: Tool = {
  name: 'JSON pretty print',
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
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder={'{"type":"json","pretty":true}'} />
        <TextAreaInput value={result} onChange={setResult} placeholder={'{\n  "type": "json",\n  "pretty": true\n}'} />
      </div>
    );
  },
};
