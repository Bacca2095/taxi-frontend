import {
  renderHook,
  act,
  RenderHookResult,
} from '@testing-library/react-hooks';
import { useStateContainer } from 'context/SessionContext';
import * as _sessionService from '../services/sessionService';

jest.mock('../services/sessionService');

const sessionService = _sessionService as jest.Mocked<typeof _sessionService>;

describe('Session Context text', () => {
  let hookWrapper: RenderHookResult<
    unknown,
    ReturnType<typeof useStateContainer>
  >;
  beforeEach(() => {
    hookWrapper = renderHook(() => useStateContainer());
  });

  it('should create session', () => {
    const document = '12345';
    sessionService.createSession.mockReturnValue(document);

    act(() => {
      hookWrapper.result.current.mutations.setDocument(document);
    });

    expect(hookWrapper.result.current.data.sessionId).toBe(document);
    expect(sessionService.createSession).toHaveBeenCalledWith(document);
  });

  it('should delete session', () => {
    const document = '12345';
    sessionService.createSession.mockReturnValue(document);

    act(() => {
      hookWrapper.result.current.mutations.clearSession();
    });

    expect(hookWrapper.result.current.data.sessionId).toBe('');
  });
});
