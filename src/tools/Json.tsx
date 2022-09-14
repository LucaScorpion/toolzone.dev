import { Tool } from './Tool';
import { useState } from 'react';
import { TextAreaInput } from '../components/input/TextAreaInput';
import { useService } from '../hooks/useService';
import { JsonService } from '../services/JsonService';
import { NumberInput } from '../components/input/NumberInput';
import { useEffectWithCatch } from '../hooks/useEffectWithCatch';

export const JsonMinify: Tool = {
  name: 'JSON minify',
  Component: () => {
    const service = useService(JsonService);
    const [value, setValue] = useState('');
    const result = useEffectWithCatch(() => service.minify(value), [service, value]);

    return (
      <div className="panels">
        <TextAreaInput value={value} onChange={setValue} placeholder={'{\n  "type": "json",\n  "pretty": true\n}'} />
        <TextAreaInput value={result?.toString()} placeholder={'{"type":"json","pretty":true}'} />
      </div>
    );
  },
};

export const JsonPrettyPrint: Tool = {
  name: 'JSON pretty print',
  Component: () => {
    const service = useService(JsonService);
    const [value, setValue] = useState('');
    const [spaces, setSpaces] = useState(2);
    const result = useEffectWithCatch(() => service.prettyPrint(value, spaces), [service, value, spaces]);

    return (
      <div className="panels-options">
        <div className="panels">
          <TextAreaInput value={value} onChange={setValue} placeholder={'{"type":"json","pretty":true}'} />
          <TextAreaInput value={result?.toString()} placeholder={'{\n  "type": "json",\n  "pretty": true\n}'} />
        </div>
        <div className="options">
          <div>
            Spaces: <NumberInput value={spaces} onChange={setSpaces} min={1} max={10} />
          </div>
        </div>
      </div>
    );
  },
};
