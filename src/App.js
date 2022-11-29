import { Theme } from 'domain';
import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'layout';
import { Loader } from 'components';
import { GlobalStyles } from 'assets/globalStyles';
import { Api } from 'services';

const { server } = new Api();

export const App = () => {
  const [appLoading, setAppLoading] = useState(false);
  useLayoutEffect(() => {
    setAppLoading(true);
    server.rootGet((error) => {
      if (!error) {
        setAppLoading(false);
      }
    });
  }, []);

  if (appLoading) return <Loader />;

  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <Layout />
      </Theme>
    </Router>
  );
};
