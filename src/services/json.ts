export function jsonPrettyPrint(value: string, spaces: number): string {
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
