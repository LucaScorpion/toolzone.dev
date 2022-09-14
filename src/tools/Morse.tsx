import { Tool } from './Tool';
import { useState } from 'react';
import { TextAreaInput } from '../components/TextAreaInput';
import { useService } from '../hooks/useService';
import { MorseService } from '../services/MorseService';
import { TextInput } from '../components/TextInput';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';

export const MorseEncode: Tool = {
  name: 'Morse encode',
  Component: () => {
    const service = useService(MorseService);
    const [value, setValue] = useState('');
    const [dash, setDash] = useState('-');
    const [dot, setDot] = useState('.');
    const [space, setSpace] = useState('/');
    const result = useEffectWithCatch(
      () => service.encode(value, dash, dot, space),
      [service, value, dash, dot, space]
    );

    return (
      <div className="panels-options">
        <div className="panels">
          <TextAreaInput value={value} onChange={setValue} placeholder="hello world" />
          <TextAreaInput value={result?.toString()} placeholder=".... . .-.. .-.. --- / .-- --- .-. .-.. -.." />
        </div>
        <div className="options">
          <div>
            Dash: <TextInput value={dash} onChange={setDash} placeholder="-" />
          </div>
          <div>
            Dot: <TextInput value={dot} onChange={setDot} placeholder="." />
          </div>
          <div>
            Space: <TextInput value={space} onChange={setSpace} placeholder="/" />
          </div>
        </div>
      </div>
    );
  },
};

export const MorseDecode: Tool = {
  name: 'Morse decode',
  Component: () => {
    const service = useService(MorseService);
    const [value, setValue] = useState('');
    const [dash, setDash] = useState('-');
    const [dot, setDot] = useState('.');
    const [space, setSpace] = useState('/');
    const result = useEffectWithCatch(
      () => service.decode(value, dash, dot, space),
      [service, value, dash, dot, space]
    );

    return (
      <div className="panels-options">
        <div className="panels">
          <TextAreaInput value={value} onChange={setValue} placeholder=".... . .-.. .-.. --- / .-- --- .-. .-.. -.." />
          <TextAreaInput value={result?.toString()} placeholder="hello world" />
        </div>
        <div className="options">
          <div>
            Dash: <TextInput value={dash} onChange={setDash} placeholder="-" />
          </div>
          <div>
            Dot: <TextInput value={dot} onChange={setDot} placeholder="." />
          </div>
          <div>
            Space: <TextInput value={space} onChange={setSpace} placeholder="/" />
          </div>
        </div>
      </div>
    );
  },
};
