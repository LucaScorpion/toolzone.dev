import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { TextInput } from '../components/input/TextInput';
import { Tool } from '../tools/Tool';
import { tools } from '../tools/tools';
import { useParam } from '../hooks/useParam';

export const ToolsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(tools);
  const toolName = useParam('tool');
  const [activeTool, setActiveTool] = useState<Tool>();

  useEffect(() => {
    setActiveTool(tools.find((t) => t.name === toolName));
  }, [toolName]);

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
    <Layout className="tools-page">
      <div className="tool">
        {activeTool && (
          <>
            <h2 className="name">{activeTool.name}</h2>
            <activeTool.Component />
          </>
        )}
      </div>
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
          <Link key={t.name} to={`/tools/${t.name}`}>
            <div className="result" onClick={() => setActiveTool(t)}>
              {t.name}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
