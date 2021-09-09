import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { AppBarNav } from '.';

describe('AppBarNav tests', () => {
  let onClick: jest.Mock;

  let clearSession: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    clearSession = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <AppBarNav />
      </SessionProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot', async () => {
    const { findByTestId } = render(
      <SessionProvider>
        <AppBarNav />
      </SessionProvider>,
    );

    const logoutButton = await findByTestId('logout');

    fireEvent.click(logoutButton);
  });
});
