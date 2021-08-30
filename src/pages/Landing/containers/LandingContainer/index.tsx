import React, { useContext } from 'react';
import { SessionContext } from 'context/SessionContext';
import { Landing } from 'pages/Landing/components/Landing';

export const LandingContainer: React.FC = () => {
  const {
    mutations: { setDocument },
  } = useContext(SessionContext);
  return <Landing onContinue={setDocument} />;
};
