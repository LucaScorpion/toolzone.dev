import { Tool } from './Tool';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { useService } from '../hooks/useService';
import { MorseService } from '../services/MorseService';

export const MorseEncoder: Tool = {
  name: 'Morse encoder',
  Component: () => {
    const service = useService(MorseService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(service.encode(value, '-', '.', '/'));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="hello world" />
        <TextAreaInput value={result} onChange={setResult} placeholder=".... . .-.. .-.. --- / .-- --- .-. .-.. -.." />
      </div>
    );
  },
};
