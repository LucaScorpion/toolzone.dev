import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Redirect to="/" />
  </Switch>
);

export default App;
