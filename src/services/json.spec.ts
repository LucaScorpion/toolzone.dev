import { jsonMinify, jsonPrettyPrint } from './json';

describe('json', () => {
  it.each`
    value                 | spaces | expected
    ${''}                 | ${2}   | ${''}
    ${'{"some":"value"}'} | ${2}   | ${'{\n  "some": "value"\n}'}
    ${'{"some":"value"}'} | ${4}   | ${'{\n    "some": "value"\n}'}
  `('pretty prints', ({ value, spaces, expected }) => {
    expect(jsonPrettyPrint(value, spaces)).toBe(expected);
  });

  it.each`
    value                        | expected
    ${''}                        | ${''}
    ${'{\n  "some": "value"\n}'} | ${'{"some":"value"}'}
  `('minifies', ({ value, expected }) => {
    expect(jsonMinify(value)).toBe(expected);
  });
});
