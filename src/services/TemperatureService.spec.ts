import { Injector } from './Injector';
import { TemperatureService, TemperatureUnit } from './TemperatureService';

describe('TemperatureService', () => {
  const converter = new Injector().resolve(TemperatureService);

  it.each`
    value    | from                          | to                            | expected
    ${12.34} | ${TemperatureUnit.kelvin}     | ${TemperatureUnit.kelvin}     | ${12.34}
    ${12.34} | ${TemperatureUnit.celsius}    | ${TemperatureUnit.celsius}    | ${12.34}
    ${12.34} | ${TemperatureUnit.fahrenheit} | ${TemperatureUnit.fahrenheit} | ${12.34}
    ${12.34} | ${TemperatureUnit.kelvin}     | ${TemperatureUnit.celsius}    | ${-260.81}
    ${12.34} | ${TemperatureUnit.celsius}    | ${TemperatureUnit.kelvin}     | ${285.49}
    ${12.34} | ${TemperatureUnit.kelvin}     | ${TemperatureUnit.fahrenheit} | ${-437.46}
    ${12.34} | ${TemperatureUnit.fahrenheit} | ${TemperatureUnit.kelvin}     | ${262.23}
    ${12.34} | ${TemperatureUnit.celsius}    | ${TemperatureUnit.fahrenheit} | ${54.21}
    ${12.34} | ${TemperatureUnit.fahrenheit} | ${TemperatureUnit.celsius}    | ${-10.92}
  `('converts the temperature', ({ value, from, to, expected }) => {
    expect(converter.convert(value, from, to)).toBeCloseTo(expected);
  });
});
