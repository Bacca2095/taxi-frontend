import React from 'react';
import { render } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { CareerPage } from '.';

const defaultProps: any = {
  history: {
    replace: jest.fn(),
  },
};

describe('Career Page tests', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <CareerPage {...defaultProps} />
      </SessionProvider>,
    );
    expect(container).toMatchSnapshot();
  });
});
