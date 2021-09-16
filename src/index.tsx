import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Injector } from './services/Injector';
import { InjectionProvider } from './hooks/useService';

const injector = new Injector();

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <InjectionProvider value={injector}>
        <App />
      </InjectionProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
