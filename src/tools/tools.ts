import { DistanceConverter } from './DistanceConverter';
import { JsonMinifier, JsonPrettyPrinter } from './JsonTools';
import { TemperatureConverter } from './TemperatureConverter';
import { MorseDecoder, MorseEncoder } from './MorseTools';
import { CaesarCipher } from './CaesarCipher';
import { PercentDecoder, PercentEncoder } from './PercentTools';

export const tools = [
  CaesarCipher,
  DistanceConverter,
  JsonMinifier,
  JsonPrettyPrinter,
  MorseDecoder,
  MorseEncoder,
  PercentDecoder,
  PercentEncoder,
  TemperatureConverter,
];
