import { waitFor } from '@testing-library/dom';
import * as sessionService from './sessionService';

describe('session service test', () => {
  it('should fetch career', async () => {
    const session = sessionService.createSession('12345');
    expect(session).toBe('ID:::12345');
  });

  it('should fetch career', async () => {
    const spyDelete = jest.spyOn(sessionService, 'deleteSession');
    sessionService.deleteSession();
    await waitFor(() => {
      expect(spyDelete).toHaveBeenCalled();
    });
  });
});
