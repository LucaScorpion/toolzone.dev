import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { TextInput } from '../components/input/TextInput';
import { Tool } from '../tools/Tool';
import { tools } from '../tools/tools';
import { useToolNav } from '../hooks/useToolNav';

export const ToolsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(tools);
  const [activeTool, setActiveTool] = useState<Tool>();
  const [toolName, toolNav] = useToolNav();

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
      tools.filter((tool) =>
        terms.every(
          (term) =>
            tool.name.toLowerCase().includes(term) ||
            tool.additionalTags.includes(term)
        )
      )
    );
  }, [searchTerm]);

  return (
    <Layout className="tools-page">
      <div className="active-tool">
        {activeTool && (
          <>
            <h1 className="name">{activeTool.name}</h1>
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
          onKeyDown={(e) => {
            if (e.key === 'Enter' && results.length) {
              toolNav(results[0].name);
            }
          }}
        />
      </div>
      <div className="results">
        {results.map((t) => (
          <Link key={t.name} to={`/tools/${encodeURIComponent(t.name)}`}>
            <div className="result" onClick={() => setActiveTool(t)}>
              {t.name}
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};
