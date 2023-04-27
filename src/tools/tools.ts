import { JsonMinify, JsonPrettyPrint } from './Json';
import { TemperatureConvert } from './Temperature';
import { Morse } from './Morse';
import { CaesarCipher } from './CaesarCipher';
import { Percent } from './Percent';
import { Base64 } from './Base64';
import { GenerateUuid } from './Uuid';
import { Hash } from './Hash';
import { CaseConvert } from './CaseConvert';

export const tools = [
  ...Base64,
  CaesarCipher,
  CaseConvert,
  GenerateUuid,
  Hash,
  JsonMinify,
  JsonPrettyPrint,
  ...Morse,
  ...Percent,
  TemperatureConvert,
];
