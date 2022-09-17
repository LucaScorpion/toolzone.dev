import { Tool } from './Tool';
import { useState } from 'react';
import { TextAreaInput } from '../components/input/TextAreaInput';
import { TextInput } from '../components/input/TextInput';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';
import { morseDecode, morseEncode } from '../services/morse';

export const MorseEncode: Tool = {
  name: 'Morse encode',
  Component: () => {
    const [value, setValue] = useState('');
    const [dash, setDash] = useState('-');
    const [dot, setDot] = useState('.');
    const [space, setSpace] = useState('/');
    const result = useEffectWithCatch(() => morseEncode(value, dash, dot, space), [value, dash, dot, space]);

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
    const [value, setValue] = useState('');
    const [dash, setDash] = useState('-');
    const [dot, setDot] = useState('.');
    const [space, setSpace] = useState('/');
    const result = useEffectWithCatch(() => morseDecode(value, dash, dot, space), [value, dash, dot, space]);

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
