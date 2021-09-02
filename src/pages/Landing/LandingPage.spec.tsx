import React from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { LandingPage } from '.';

const defaultProps: any = {
  history: {
    replace: jest.fn(),
  },
};

describe('Landing Page tests', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <LandingPage {...defaultProps} />
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
