import { Distance } from './Distance';
import { JsonMinify, JsonPrettyPrint } from './Json';
import { TemperatureConvert } from './Temperature';
import { MorseDecode, MorseEncode } from './Morse';
import { CaesarCipher } from './CaesarCipher';
import { PercentDecode, PercentEncode } from './Percent';

export const tools = [
  CaesarCipher,
  Distance,
  JsonMinify,
  JsonPrettyPrint,
  MorseDecode,
  MorseEncode,
  PercentDecode,
  PercentEncode,
  TemperatureConvert,
];
