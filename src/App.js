import { Theme } from 'domain';
import { useState, useLayoutEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'layout';
import { Loader } from 'components';
import { GlobalStyles } from 'assets/globalStyles';
import { Api } from 'services';

const { server } = new Api();
const ERROR_MESSAGE_LOADING =
  'Service is not avaliable yet. Try again later. We are fixing it';

export const App = () => {
  const [appLoading, setAppLoading] = useState(false);
  const [error, setError] = useState();

  useLayoutEffect(() => {
    setAppLoading(true);
    setTimeout(() => {
      setError(ERROR_MESSAGE_LOADING);
    }, 10000);
    server.rootGet((error) => {
      if (!error) {
        setAppLoading(false);
      } else {
        setError(ERROR_MESSAGE_LOADING);
      }
    });
  }, []);

  if (appLoading) return <Loader error={error} />;

  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <Layout />
      </Theme>
    </Router>
  );
};
