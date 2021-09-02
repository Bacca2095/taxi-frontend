/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useEffect, useRef, useState } from 'react';
import { SessionState } from 'context/models/SessionState';
import * as sessionService from '../services/sessionService';

export const useStateContainer = (
  initialState: SessionState = { document: '', sessionId: '' },
) => {
  const [document, setDocument] = useState(initialState.document);
  const [sessionId, setSessionId] = useState(initialState.sessionId);
  const documentRef = useRef(false);

  const clearSession = () => {
    sessionService.deleteSession();
  };

  useEffect(() => {
    if (!documentRef.current) {
      documentRef.current = true;
      return;
    }
    if (!document) {
      return;
    }
    setSessionId(sessionService.createSession(document));
  }, [document]);

  return {
    data: { document, sessionId },
    mutations: { setDocument, clearSession },
  };
};

export const SessionContext = createContext<
  ReturnType<typeof useStateContainer>
>({} as never);

export const SessionProvider: React.FC = ({ children }) => {
  const contextValue = useStateContainer(sessionService.recoverSession());
  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
