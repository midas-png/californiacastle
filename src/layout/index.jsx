import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { LayoutWrapper } from './styles';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { handleRefferalLink } from 'utils';
import { AppRouter } from 'pages';

const NAVBAR_DISABLED_ROUTES = ['/booking'];

export const Layout = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const isNavbarEnabled = !NAVBAR_DISABLED_ROUTES.includes(location.pathname);

  useEffect(() => {
    handleRefferalLink(searchParams.get('a'));
  }, []);

  useEffect(() => {
    if (window.scrollY > 80) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <LayoutWrapper>
      {isNavbarEnabled && <Navbar />}
      <AppRouter />
      <Footer />
    </LayoutWrapper>
  );
};
