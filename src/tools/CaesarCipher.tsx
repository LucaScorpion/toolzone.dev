import { Tool } from './Tool';
import { useService } from '../hooks/useService';
import { useEffect, useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { CaesarCipherService } from '../services/CaesarCipherService';
import { NumberInput } from '../components/NumberInput';

export const CaesarCipher: Tool = {
  name: 'Caesar cipher',
  Component: () => {
    const service = useService(CaesarCipherService);
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [shift, setShift] = useState(13);

    useEffect(() => {
      try {
        setResult(service.encode(value, shift));
      } catch (e) {
        setResult(e.message);
      }
    }, [service, value, shift]);

    return (
      <div className="panels-options">
        <div className="panels">
          <TextAreaInput value={value} onChange={setValue} placeholder="Hello world!" />
          <TextAreaInput value={result} onChange={setResult} placeholder="Uryyb jbeyq!" />
        </div>
        <div className="options">
          <div>
            <div>
              Shift: <NumberInput value={shift} onChange={setShift} min={1} max={25} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
