export interface HashOptions {
  algorithm?: AlgorithmIdentifier;
}

export function hash(value: string, options: HashOptions): Promise<string> {
  // TODO: Find better way to do default option values?
  return crypto.subtle
    .digest(options.algorithm || 'SHA-1', new TextEncoder().encode(value))
    .then((b) => new TextDecoder().decode(b));
  // TODO: display as hex
}
