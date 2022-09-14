import { Tool } from './Tool';
import { useService } from '../hooks/useService';
import { useState } from 'react';
import { TextAreaInput } from '../components/input/TextAreaInput';
import { CaesarCipherService } from '../services/CaesarCipherService';
import { NumberInput } from '../components/input/NumberInput';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';

export const CaesarCipher: Tool = {
  name: 'Caesar cipher',
  Component: () => {
    const service = useService(CaesarCipherService);
    const [value, setValue] = useState('');
    const [shift, setShift] = useState(13);
    const result = useEffectWithCatch(() => service.encode(value, shift), [service, value, shift]);

    return (
      <div className="panels-options">
        <div className="panels">
          <TextAreaInput value={value} onChange={setValue} placeholder="Hello world!" />
          <TextAreaInput value={result?.toString()} placeholder="Uryyb jbeyq!" />
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
