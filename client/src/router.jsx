import {
  createBrowserRouter,
} from 'react-router-dom';

import {Error} from './pages';
import { Layout } from './pages/Layout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <><p>Hello World</p></>
      },
    ],
  },
]);

export { router };
