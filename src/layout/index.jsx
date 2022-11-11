import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutWrapper } from './styles';
import { Navbar } from './navbar';
import { handleRefferalLink } from 'utils';
import { AppRouter } from 'pages';

export const Layout = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    handleRefferalLink(searchParams.get('a'));
  }, []);

  return (
    <LayoutWrapper>
      <Navbar />
      <AppRouter />
    </LayoutWrapper>
  );
};
