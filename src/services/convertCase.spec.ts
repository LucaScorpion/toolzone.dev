import { convertCase } from './convertCase';

describe('convertCase', () => {
  it.each`
    value      | casing     | expected
    ${''}      | ${'lower'} | ${''}
    ${'ASDfg'} | ${'lower'} | ${'asdfg'}
    ${'ASDfg'} | ${'upper'} | ${'ASDFG'}
  `('converts the casing', ({ value, casing, expected }) => {
    expect(convertCase(value, { casing })).toBe(expected);
  });
});
