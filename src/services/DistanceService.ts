import { convertSIUnits } from '../utils/SI';

export class DistanceService {
  public static readonly NAME = 'DistanceService';

  public convert(value: number, fromUnit: string, toUnit: string): number {
    // TODO: Non-SI units.
    return convertSIUnits(value, fromUnit, toUnit);
  }
}