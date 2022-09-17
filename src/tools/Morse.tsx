import { morseDecode, morseEncode } from '../services/morse';
import { createStringDecodeEncodeTools } from './helpers/createStringDecodeEncodeTools';

export const Morse = createStringDecodeEncodeTools(
  'Morse',
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
