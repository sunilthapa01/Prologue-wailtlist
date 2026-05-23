import { WaitlistProvider } from './context';
import AppRouter from './routes/AppRouter';
import './styles/global.scss';

const App = () => {
  return (
    <WaitlistProvider>
      <AppRouter />
    </WaitlistProvider>
  );
};

export default App;
