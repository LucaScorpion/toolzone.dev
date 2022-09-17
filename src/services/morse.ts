export function morseEncode(value: string, dash: string, dot: string, space: string): string {
  return value
    .toLowerCase()
    .split(' ')
    .filter((w) => !!w)
    .map((word) =>
      word
        .split('')
        .map((symbol) => symbolToMorse[symbol] ?? '')
        .join(' ')
        .replaceAll('-', dash)
        .replaceAll('.', dot)
    )
    .join(` ${space} `);
}

export function morseDecode(value: string, dash: string, dot: string, space: string): string {
  return value
    .split(space)
    .filter((w) => !!w)
    .map((word) =>
      word
        .trim()
        .replaceAll(dash, '-')
        .replaceAll(dot, '.')
        .split(' ')
        .map((symbol) => morseToSymbol[symbol] ?? '')
        .join('')
    )
    .join(` `);
}

// Source: https://www.itu.int/rec/R-REC-M.1677-1-200910-I
const symbolToMorse: Record<string, string> = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----',
  '.': '.-.-.-',
  ',': '--..--',
  ':': '---...',
  '?': '..--..',
  "'": '.----.',
  '-': '-....-',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '"': '.-..-.',
  '=': '-...-',
  '+': '.-.-.',
  '@': '.--.-.',
};

const morseToSymbol = Object.entries(symbolToMorse)
  .map(([k, v]) => ({ [v]: k }))
  .reduce((acc, cur) => ({ ...acc, ...cur }), {});
