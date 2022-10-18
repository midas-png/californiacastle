import { Theme } from 'domain';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'layout';
import { GlobalStyles } from 'assets';

export const App = () => {
  return (
    <Router>
      <Theme>
        <GlobalStyles />
        <Layout />
      </Theme>
    </Router>
  );
};
