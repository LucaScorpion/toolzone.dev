import { useService } from '../hooks/useService';
import { TemperatureService, TemperatureUnit } from '../services/TemperatureService';
import { Tool } from './Tool';
import { NumberInput } from '../components/NumberInput';
import { useEffect, useState } from 'react';
import { Icon } from '../components/Icon';
import { Option, SelectInput } from '../components/SelectInput';

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
      <div>
        <NumberInput value={value} onChange={setValue} />
        <SelectInput options={unitOptions} value={fromUnit} onChange={(c) => setFromUnit(c as TemperatureUnit)} />
        <Icon icon="arrow-right" />
        <SelectInput options={unitOptions} value={toUnit} onChange={(c) => setToUnit(c as TemperatureUnit)} />
        <Icon icon="equals" />
        <span>{isNaN(result) ? '' : result}</span>
      </div>
    );
  },
};
