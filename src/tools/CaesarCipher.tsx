import { caesarCipherEncode } from '../services/caesarCipher';
import { createStringTool } from './createStringTool';

export const CaesarCipher = createStringTool('Caesar cipher', caesarCipherEncode, 'Hello world!', 'Uryyb jbeyq!', [
  {
    name: 'Shift',
    type: 'number',
    defaultValue: 13,
    min: 1,
    max: 25,
  },
]);
