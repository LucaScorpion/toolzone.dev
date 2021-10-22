import { DistanceConverter } from './DistanceConverter';
import { JsonMinifier } from './JsonMinifier';
import { JsonPrettyPrinter } from './JsonPrettyPrinter';
import { TemperatureConverter } from './TemperatureConverter';
import { MorseDecoder } from './MorseDecoder';
import { MorseEncoder } from './MorseEncoder';

export const tools = [
  DistanceConverter,
  JsonMinifier,
  JsonPrettyPrinter,
  MorseDecoder,
  MorseEncoder,
  TemperatureConverter,
];
