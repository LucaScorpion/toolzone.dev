import { Injector } from './Injector';
import { JsonService } from './JsonService';

describe('JsonService', () => {
  const service = new Injector().resolve(JsonService);

  it.each`
    value                 | spaces | expected
    ${''}                 | ${2}   | ${''}
    ${'{"some":"value"}'} | ${2}   | ${'{\n  "some": "value"\n}'}
    ${'{"some":"value"}'} | ${4}   | ${'{\n    "some": "value"\n}'}
  `('pretty prints', ({ value, spaces, expected }) => {
    expect(service.prettyPrint(value, spaces)).toBe(expected);
  });

  it.each`
    value                        | expected
    ${''}                        | ${''}
    ${'{\n  "some": "value"\n}'} | ${'{"some":"value"}'}
  `('minifies', ({ value, expected }) => {
    expect(service.minify(value)).toBe(expected);
  });
});
