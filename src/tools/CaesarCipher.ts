import { caesarCipherEncode } from '../services/caesarCipher';
import { createIOTool } from './helpers/createIOTool';

export const CaesarCipher = createIOTool(
  'Caesar cipher',
  'rot13 shift',
  caesarCipherEncode,
  'Hello world!',
  'Uryyb jbeyq!',
  [
    {
      name: 'shift',
      type: 'number',
      defaultValue: 13,
      min: 1,
      max: 25,
    },
  ]
);
