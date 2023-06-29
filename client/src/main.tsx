import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './assets/styles/global-style.ts';
import { light } from './assets/styles/themes.ts';
import { router } from './components/router/router.tsx';

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
