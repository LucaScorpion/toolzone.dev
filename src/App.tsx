import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToolsPage } from './pages/ToolsPage';

export const App: React.FC = () => (
  <Routes>
    <Route path="/tools/:tool" element={<ToolsPage />} />
    <Route path="*" element={<ToolsPage />} />
  </Routes>
);
