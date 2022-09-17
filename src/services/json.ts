export function jsonPrettyPrint(value: string, options: { Spaces: number }): string {
  const spaces = options.Spaces || 2;
  if (!value) {
    return '';
  }
  return JSON.stringify(JSON.parse(value), null, spaces);
}

export function jsonMinify(value: string): string {
  if (!value) {
    return '';
  }
  return JSON.stringify(JSON.parse(value));
}
