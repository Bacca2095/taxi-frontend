import { SessionState } from 'context/models/SessionState';

const SESSION_IDENTIFIER = 'SESSION_ID';
const SESSION_SEPARATOR = ':::';

export const createSession = (document?: string): string => {
  const sessionId = `ID${SESSION_SEPARATOR}${document}`;
  localStorage.setItem(SESSION_IDENTIFIER, sessionId);
  return sessionId;
};

export const deleteSession = (): void => {
  localStorage.removeItem(SESSION_IDENTIFIER);
};

export const recoverSession = (): SessionState => {
  const sessionId = localStorage.getItem(SESSION_IDENTIFIER);
  if (!sessionId) {
    return {};
  }
  return {
    sessionId,
    document: sessionId.split(SESSION_SEPARATOR)[1],
  };
};
