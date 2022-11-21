import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { LayoutWrapper } from './styles';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { handleRefferalLink } from 'utils';
import { AppRouter } from 'pages';

export const Layout = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();

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
      <Navbar />
      <AppRouter />
      <Footer />
    </LayoutWrapper>
  );
};
