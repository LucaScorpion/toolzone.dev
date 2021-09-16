import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { NumberInput } from '../components/NumberInput';
import { SelectInput } from '../components/SelectInput';
import { SI_UNITS } from '../services/SI';
import { useService } from '../hooks/useService';
import { DistanceConverter } from '../services/DistanceConverter';

export const HomePage: React.FC = () => {
  const [fromValue, setFromValue] = useState<number>();
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState(0);

  const converter = useService(DistanceConverter);

  useEffect(() => {
    setResult(converter.convertDistance(fromValue ?? 0, fromUnit, toUnit));
  }, [converter, fromValue, fromUnit, toUnit]);

  return (
    <Layout>
      This is where the content goes
      <div>
        <NumberInput value={fromValue} onChange={setFromValue} />
        <SelectInput
          options={Object.entries(SI_UNITS).map(([k]) => ({
            value: k,
            label: `${k}meter`,
          }))}
          value={fromUnit}
          onChange={setFromUnit}
        />
        to
        <SelectInput
          options={Object.entries(SI_UNITS).map(([k]) => ({
            value: k,
            label: `${k}meter`,
          }))}
          value={toUnit}
          onChange={setToUnit}
        />
        = {result}
      </div>
    </Layout>
  );
};
