import React, { useState } from 'react';
import { TextArea } from './TextArea';
import { Button } from '../Button';

export interface Props {
  value: undefined | string | ArrayBuffer;
  placeholder: string;
  className?: string;
}

export type Mode = 'text' | 'hex';

export const IOField: React.FC<Props> = ({ value, ...props }) => {
  const [mode, setMode] = useState<Mode>('text');

  const modeValue = convertValue(value ?? '', mode);

  return (
    <div className="io-field">
      <div className="toolbar">
        <Button onClick={() => setMode('text')}>Text</Button>
        <Button onClick={() => setMode('hex')}>Hex</Button>
      </div>
      <TextArea {...props} value={modeValue} />
    </div>
  );
};

function convertValue(value: string | ArrayBuffer, mode: Mode): string {
  const buffer = typeof value === 'string' ? new TextEncoder().encode(value) : value;

  switch (mode) {
    case 'text':
      return new TextDecoder().decode(buffer);
    case 'hex':
      return [...new Uint8Array(buffer)].map((v) => v.toString(16).padStart(2, '0')).join('');
    default:
      throw new Error(`Unknown mode: ${mode}`);
  }
}
