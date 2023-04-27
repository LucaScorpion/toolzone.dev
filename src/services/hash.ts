export interface HashOptions {
  algorithm: string;
}

export function hash(
  value: string,
  options: HashOptions
): Promise<ArrayBuffer> {
  return crypto.subtle.digest(
    options.algorithm,
    new TextEncoder().encode(value)
  );
}
