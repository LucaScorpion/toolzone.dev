import { convertSIUnits } from './SI';

describe('convertSIUnits', () => {
  it.each`
    value  | from       | to         | expected
    ${0}   | ${''}      | ${''}      | ${0}
    ${300} | ${'milli'} | ${'deci'}  | ${3}
    ${23}  | ${'hecto'} | ${'milli'} | ${2300000}
    ${1}   | ${'yotta'} | ${'yocto'} | ${1e48}
  `('converts the value', ({ value, from, to, expected }) => {
    expect(convertSIUnits(value, from, to)).toBe(expected);
  });
});
