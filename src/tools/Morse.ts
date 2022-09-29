import { morseDecode, morseEncode } from '../services/morse';
import { createDecodeEncodeTools } from './helpers/createDecodeEncodeTools';

export const Morse = createDecodeEncodeTools(
  'Morse',
  'telegraph',
  morseDecode,
  morseEncode,
  '.... . .-.. .-.. --- / .-- --- .-. .-.. -..',
  'hello world',
  [
    {
      name: 'dash',
      type: 'string',
      defaultValue: '-',
    },
    {
      name: 'dot',
      type: 'string',
      defaultValue: '.',
    },
    {
      name: 'space',
      type: 'string',
      defaultValue: '/',
    },
  ]
);
