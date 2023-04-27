interface ConvertCaseOptions {
  casing?: Casing;
}

type Casing = 'lower' | 'upper' | 'random';

export function convertCase(value: string, options: ConvertCaseOptions): string {
  options.casing = (options.casing?.toLowerCase() as Casing) || 'lower';

  switch (options.casing) {
    case 'lower':
      return value.toLowerCase();
    case 'upper':
      return value.toUpperCase();
    case 'random':
      return value
        .split('')
        .map((c) => (Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase()))
        .join('');
    default:
      throw new Error(`Unknown casing: ${options.casing}`);
  }
}
