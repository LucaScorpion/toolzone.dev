import { caesarCipherEncode } from '../services/caesarCipher';
import { createStringTool } from './helpers/createStringTool';

export const CaesarCipher = createStringTool('Caesar cipher', caesarCipherEncode, 'Hello world!', 'Uryyb jbeyq!', [
  {
    name: 'shift',
    type: 'number',
    defaultValue: 13,
    min: 1,
    max: 25,
  },
]);
