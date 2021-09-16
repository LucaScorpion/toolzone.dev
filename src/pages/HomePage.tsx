import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { NumberInput } from '../components/NumberInput';

export const HomePage: React.FC = () => {
  const [num, setNum] = useState<number>();

  return (
    <Layout>
      This is where the content goes
      <div>
        <NumberInput value={num} onChange={setNum} />
        Result: {num}
      </div>
    </Layout>
  );
};
