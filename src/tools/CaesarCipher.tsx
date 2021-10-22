import { Tool } from './Tool';
import { useService } from '../hooks/useService';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { CaesarCipherService } from '../services/CaesarCipherService';

export const CaesarCipher: Tool = {
  name: 'Caesar cipher',
  Component: () => {
    const service = useService(CaesarCipherService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
      try {
        setResult(service.encode(value, 13));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder="Hello world!" />
        <TextAreaInput value={result} onChange={setResult} placeholder="Uryyb jbeyq!" />
      </div>
    );
  },
};
