import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { LandingPage } from 'pages/Landing';
import { FoodMenuPage } from 'pages/FoodMenu';
import { SessionContext } from 'context/SessionContext';
import { ConditionalRoute } from 'components/ConditionalRoute';

const App: React.FC = () => {
  const {
    data: { sessionId },
  } = useContext(SessionContext);
  return (
    <Router>
      <Switch>
        <ConditionalRoute
          path="/menu"
          canActivate={sessionId !== undefined}
          redirectTo="/"
          component={FoodMenuPage}
        />
        <ConditionalRoute
          path="/"
          canActivate={sessionId === undefined}
          redirectTo="/menu"
          component={LandingPage}
        />
      </Switch>
    </Router>
  );
};

export default App;
