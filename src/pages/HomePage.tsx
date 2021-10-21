import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { TextInput } from '../components/TextInput';
import { Tool } from '../tools/Tool';
import { DistanceConverter } from '../tools/DistanceConverter';
import { TemperatureConverter } from '../tools/TemperatureConverter';

const tools: Tool[] = [DistanceConverter, TemperatureConverter];

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(tools);
  const [tool, setTool] = useState<Tool>();

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
        const nameLower = tool.name.toLowerCase();
        return terms.every((term) => nameLower.includes(term));
      })
    );
  }, [searchTerm]);

  return (
    <Layout className="home-page">
      {tool && <tool.Component />}
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
          <div key={t.name} className="tool" onClick={() => setTool(t)}>
            {t.name}
          </div>
        ))}
      </div>
    </Layout>
  );
};
