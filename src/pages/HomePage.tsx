import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { TextInput } from '../components/TextInput';
import { Tool } from '../tools/Tool';
import { tools } from '../tools/tools';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(tools);
  const [activeTool, setActiveTool] = useState<Tool>();

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
      {activeTool && (
        <div className="tool">
          <h2 className="name">{activeTool.name}</h2>
          <activeTool.Component />
        </div>
      )}
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
          <div key={t.name} className="result" onClick={() => setActiveTool(t)}>
            {t.name}
          </div>
        ))}
      </div>
    </Layout>
  );
};
