// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { RouterProvider } from 'react-router-dom';

import { router } from './router.jsx';

const App = (): JSX.Element => <RouterProvider router={router} />;

// eslint-disable-next-line import/no-default-export
export { App };
