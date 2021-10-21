import { useService } from '../hooks/useService';
import { TemperatureService, TemperatureUnit } from '../services/TemperatureService';
import { Tool } from './Tool';
import { NumberInput } from '../components/NumberInput';
import { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';
import { Option, SelectInput } from '../components/SelectInput';
import { TextInput } from '../components/TextInput';

const unitOptions: Option[] = Object.values(TemperatureUnit).map((v) => ({
  value: v,
  label: v,
}));

export const TemperatureConverter: Tool = {
  name: 'Temperature converter',
  Component: () => {
    const service = useService(TemperatureService);
    const [value, setValue] = useState(0);
    const [fromUnit, setFromUnit] = useState(TemperatureUnit.celsius);
    const [toUnit, setToUnit] = useState(TemperatureUnit.fahrenheit);
    const [result, setResult] = useState(NaN);

    useEffect(() => {
      setResult(service.convert(value, fromUnit, toUnit));
    }, [service, value, fromUnit, toUnit]);

    return (
      <div className="converter">
        <NumberInput className="input" value={value} onChange={setValue} />
        <SelectInput
          className="unit"
          options={unitOptions}
          value={fromUnit}
          onChange={(c) => setFromUnit(c as TemperatureUnit)}
        />
        <Icon icon="arrow-right" />
        <SelectInput
          className="unit"
          options={unitOptions}
          value={toUnit}
          onChange={(c) => setToUnit(c as TemperatureUnit)}
        />
        <Icon icon="equals" />
        <TextInput
          className="output"
          value={isNaN(result) ? '' : result.toString()}
          onChange={() => undefined}
          readOnly
        />
      </div>
    );
  },
};
