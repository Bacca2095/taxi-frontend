import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/Landing';
import { SessionContext } from 'context/SessionContext';
import { ConditionalRoute } from 'components/ConditionalRoute';
import { CareerPage } from 'pages/Career';

const App: React.FC = () => {
  const {
    data: { sessionId },
  } = useContext(SessionContext);
  return (
    <>
      <Router>
        <Switch>
          <ConditionalRoute
            path="/carrera"
            canActivate={sessionId !== undefined}
            redirectTo="/"
            component={CareerPage}
          />
          <ConditionalRoute
            path="/"
            canActivate={sessionId === undefined}
            redirectTo="/carrera"
            component={LandingPage}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
