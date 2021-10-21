import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { TextInput } from '../components/TextInput';
import { DistanceConverter } from '../services/DistanceConverter';
import { TemperatureConverter } from '../services/TemperatureConverter';

const tools = [DistanceConverter, TemperatureConverter];

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(tools);

  useEffect(() => {
    const terms = searchTerm
      .toLowerCase()
      .split(' ')
      .filter((t) => !!t);

    if (!terms.length) {
      setResults(tools);
      return;
    }

    setResults(
      tools.filter((tool) => {
        const nameLower = tool.NAME.toLowerCase();
        return terms.every((term) => nameLower.includes(term));
      })
    );
  }, [searchTerm]);

  return (
    <Layout className="home-page">
      <div className="search-wrapper">
        <TextInput
          className="search"
          value={searchTerm}
          onChange={setSearchTerm}
          autoFocus
          placeholder="Search for a tool..."
        />
      </div>
      <div className="results">
        {results.map((t) => (
          <div key={t.NAME} className="tool">
            {t.NAME}
          </div>
        ))}
      </div>
    </Layout>
  );
};
