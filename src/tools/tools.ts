import { JsonMinify, JsonPrettyPrint } from './Json';
import { TemperatureConvert } from './Temperature';
import { Morse } from './Morse';
import { CaesarCipher } from './CaesarCipher';
import { Percent } from './Percent';
import { Base64 } from './Base64';

export const tools = [...Base64, CaesarCipher, JsonMinify, JsonPrettyPrint, ...Morse, ...Percent, TemperatureConvert];
