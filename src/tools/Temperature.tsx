import { temperatureConvert, TemperatureUnit } from '../services/temperature';
import { Tool } from './Tool';
import { NumberInput } from '../components/input/NumberInput';
import { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';
import { Option, SelectInput } from '../components/input/SelectInput';
import { TextInput } from '../components/input/TextInput';

const unitOptions: Option[] = Object.values(TemperatureUnit).map((v) => ({
  value: v,
  label: v,
}));

export const TemperatureConvert: Tool = {
  name: 'Temperature conversion',
  additionalTags: 'celsius convert fahrenheit kelvin',
  Component: () => {
    const [value, setValue] = useState(0);
    const [fromUnit, setFromUnit] = useState(TemperatureUnit.celsius);
    const [toUnit, setToUnit] = useState(TemperatureUnit.fahrenheit);
    const [result, setResult] = useState(NaN);

    useEffect(() => {
      setResult(temperatureConvert(value, fromUnit, toUnit));
    }, [value, fromUnit, toUnit]);

    return (
      <div className="tool unit-converter">
        <NumberInput value={value} onChange={setValue} />
        <SelectInput
          options={unitOptions}
          value={fromUnit}
          onChange={(c) => setFromUnit(c as TemperatureUnit)}
        />
        <Icon icon="arrow-right" />
        <SelectInput
          options={unitOptions}
          value={toUnit}
          onChange={(c) => setToUnit(c as TemperatureUnit)}
        />
        <Icon icon="equals" />
        <TextInput
          value={isNaN(result) ? '' : result.toString()}
          onChange={() => undefined}
          readOnly
        />
      </div>
    );
  },
};
