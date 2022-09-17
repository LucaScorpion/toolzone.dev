export enum TemperatureUnit {
  kelvin = 'Kelvin',
  celsius = 'Celsius',
  fahrenheit = 'Fahrenheit',
}

export function temperatureConvert(value: number, fromUnit: TemperatureUnit, toUnit: TemperatureUnit): number {
  const kelvinValue = new unitMap[fromUnit](value).toKelvin();
  return unitMap[toUnit].fromKelvin(kelvinValue);
}

const KELVIN_DIFF = 273.15;

abstract class BaseTemperatureUnit {
  public constructor(protected readonly value: number) {}

  public abstract toKelvin(): number;
}

class Kelvin extends BaseTemperatureUnit {
  public static fromKelvin(kelvin: number): number {
    return kelvin;
  }

  public toKelvin(): number {
    return this.value;
  }
}

class Celsius extends BaseTemperatureUnit {
  public static fromKelvin(kelvin: number): number {
    return kelvin - KELVIN_DIFF;
  }

  public toKelvin(): number {
    return this.value + KELVIN_DIFF;
  }
}

class Fahrenheit extends BaseTemperatureUnit {
  public static fromKelvin(kelvin: number): number {
    return (kelvin - KELVIN_DIFF) * 1.8 + 32;
  }

  public toKelvin(): number {
    return (this.value - 32) / 1.8 + KELVIN_DIFF;
  }
}

const unitMap = {
  [TemperatureUnit.kelvin]: Kelvin,
  [TemperatureUnit.celsius]: Celsius,
  [TemperatureUnit.fahrenheit]: Fahrenheit,
};
