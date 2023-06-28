import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { GlobalStyle } from './assets/styles/global-style.ts';

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
