export interface HashOptions {
  algorithm: string;
}

export function hash(value: string, options: HashOptions): Promise<string> {
  return crypto.subtle
    .digest(options.algorithm, new TextEncoder().encode(value))
    .then((b) => new TextDecoder().decode(b));
}
