import * as sessionService from './sessionService';

describe('session service test', () => {
  it('should fetch career', async () => {
    const session = sessionService.createSession('12345');
    expect(session).toBe('ID:::12345');
  });
});
