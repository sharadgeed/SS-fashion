import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { StoreProvider } from './context/StoreContext';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return <StoreProvider><Header/><AppRoutes/><Footer/></StoreProvider>;
}
