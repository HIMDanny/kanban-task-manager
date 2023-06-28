import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { GlobalStyle } from './assets/styles/global-style.ts';
import { router } from './libs/components/router/router.tsx';

// eslint-disable-next-line @typescript-eslint/non-nullable-type-assertion-style, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
