interface JsonOptions {
  spaces?: number;
}

export function jsonPrettyPrint(value: string, options: JsonOptions): string {
  const spaces = options.spaces || 2;
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
