import { Tool } from './Tool';
import { useState } from 'react';
import { TextInput } from '../components/input/TextInput';
import { Button } from '../components/Button';

export const GenerateUuid: Tool = {
  name: 'Generate UUID',
  additionalTags: 'guid random uuidv4',
  Component: () => {
    const [uuid, setUuid] = useState(() => crypto.randomUUID());

    return (
      <div className="tool simple-generator">
        <TextInput value={uuid} readOnly />
        <Button onClick={() => setUuid(crypto.randomUUID())}>Generate</Button>
      </div>
    );
  },
};
