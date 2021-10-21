import { convertSIUnits } from '../utils/SI';

export class DistanceConverter {
  public static readonly NAME = 'DistanceConverter';

  public convert(value: number, fromUnit: string, toUnit: string): number {
    // TODO: Non-SI units.
    return convertSIUnits(value, fromUnit, toUnit);
  }
}
