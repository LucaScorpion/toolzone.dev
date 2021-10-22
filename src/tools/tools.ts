import { DistanceConverter } from './DistanceConverter';
import { JsonMinifier, JsonPrettyPrinter } from './JsonTools';
import { TemperatureConverter } from './TemperatureConverter';
import { MorseDecoder, MorseEncoder } from './MorseTools';

export const tools = [
  DistanceConverter,
  JsonMinifier,
  JsonPrettyPrinter,
  MorseDecoder,
  MorseEncoder,
  TemperatureConverter,
];
