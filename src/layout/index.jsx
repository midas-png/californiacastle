import { LayoutWrapper } from './styles';
import { Navbar } from './navbar';
import { AppRouter } from 'pages';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <AppRouter />
    </LayoutWrapper>
  );
};
