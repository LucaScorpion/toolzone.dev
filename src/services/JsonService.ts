export class JsonService {
  public static readonly NAME = 'JsonService';

  public prettyPrint(value: string, spaces: number): string {
    if (!value) {
      return '';
    }
    return JSON.stringify(JSON.parse(value), null, spaces);
  }

  public minify(value: string): string {
    if (!value) {
      return '';
    }
    return JSON.stringify(JSON.parse(value));
  }
}
