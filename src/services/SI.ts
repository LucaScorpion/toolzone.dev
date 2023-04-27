export function convertSIUnits(
  value: number,
  fromUnit: string,
  toUnit: string
): number {
  const fromSIUnit = SI_UNITS[fromUnit];
  const toSIUnit = SI_UNITS[toUnit];
  const factorDiff = fromSIUnit.factor - toSIUnit.factor;
  return value * Math.pow(10, factorDiff);
}

// Source: https://physics.nist.gov/cuu/Units/prefixes.html
export const SI_UNITS: Record<string, SIUnit> = {
  yocto: siUnit('y', -24),
  zepto: siUnit('z', -21),
  atto: siUnit('a', -18),
  femto: siUnit('f', -15),
  pico: siUnit('p', -12),
  nano: siUnit('n', -9),
  micro: siUnit('µ', -6),
  milli: siUnit('m', -3),
  centi: siUnit('c', -2),
  deci: siUnit('d', -1),
  '': siUnit('', 0),
  deka: siUnit('da', 1),
  hecto: siUnit('h', 2),
  kilo: siUnit('k', 3),
  mega: siUnit('M', 6),
  giga: siUnit('G', 9),
  tera: siUnit('T', 12),
  peta: siUnit('P', 15),
  exa: siUnit('E', 18),
  zetta: siUnit('Z', 21),
  yotta: siUnit('Y', 24),
};

interface SIUnit {
  symbol: string;
  factor: number;
}

function siUnit(symbol: string, factor: number): SIUnit {
  return {
    symbol,
    factor,
  };
}
