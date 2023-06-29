import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { GlobalStyle } from './assets/styles/global-style.ts';
import { light } from './assets/styles/themes.ts';

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style
ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
