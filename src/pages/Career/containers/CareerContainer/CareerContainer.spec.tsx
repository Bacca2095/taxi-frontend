import React from 'react';
import { render } from '@testing-library/react';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import { SessionProvider } from 'context/SessionContext';
import { CareerContainer } from '.';

describe('Career Container tests', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <CareerProvider>
          <CareerContainer />
        </CareerProvider>
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
