// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { Outlet } from 'react-router-dom';

const App: React.FC<any> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export { App };
