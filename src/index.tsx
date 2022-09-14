import React from 'react';
import './style/index.scss';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { Injector } from './services/Injector';
import { InjectionProvider } from './hooks/useService';
import { createRoot } from 'react-dom/client';

const injector = new Injector();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HashRouter>
      <InjectionProvider value={injector}>
        <App />
      </InjectionProvider>
    </HashRouter>
  </React.StrictMode>
);
