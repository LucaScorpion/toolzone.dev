import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToolsPage } from './pages/ToolsPage';

export const App: React.FC = () => (
  <Routes>
    <Route path="/tools/:tool?" element={<ToolsPage />} />
    <Route element={<Navigate to="/tools" />} />
  </Routes>
);
