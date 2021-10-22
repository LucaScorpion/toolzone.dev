import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToolsPage } from './pages/ToolsPage';

export const App: React.FC = () => (
  <Switch>
    <Route exact path="/tools/:tool?" component={ToolsPage} />
    <Redirect to="/tools" />
  </Switch>
);

export default App;
