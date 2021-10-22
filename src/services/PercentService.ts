export class PercentService {
  public static readonly NAME = 'PercentService';

  public encode(value: string): string {
    return encodeURIComponent(value);
  }

  public decode(value: string): string {
    return decodeURIComponent(value);
  }
}
