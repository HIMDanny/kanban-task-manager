import { Button } from '../components/Button';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App: React.FC = () => {
  return (
    <Button
      type="button"
      variant="destructive"
      text="test"
    />
  );
};

// eslint-disable-next-line import/no-default-export
export { App };
