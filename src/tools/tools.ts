import { JsonMinify, JsonPrettyPrint } from './Json';
import { TemperatureConvert } from './Temperature';
import { MorseDecode, MorseEncode } from './Morse';
import { CaesarCipher } from './CaesarCipher';
import { Percent } from './Percent';
import { Base64 } from './Base64';

export const tools = [
  ...Base64,
  CaesarCipher,
  JsonMinify,
  JsonPrettyPrint,
  MorseDecode,
  MorseEncode,
  ...Percent,
  TemperatureConvert,
];
