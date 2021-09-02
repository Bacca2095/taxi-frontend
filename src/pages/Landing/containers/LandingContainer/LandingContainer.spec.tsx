import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { LandingContainer } from '.';

describe('Landing Container tests', () => {
  let onContinue: jest.Mock;

  beforeEach(() => {
    onContinue = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <LandingContainer />
      </SessionProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
