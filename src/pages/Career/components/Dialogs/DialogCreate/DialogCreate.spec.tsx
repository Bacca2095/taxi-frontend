import React from 'react';
import nock from 'nock';
import { render } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import { DialogCreate } from '.';

describe('Dialog Create tests', () => {
  let onClose: jest.Mock;
  let onCreate: jest.Mock;

  beforeEach(() => {
    onClose = jest.fn();
    onCreate = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <SessionProvider>
        <CareerProvider>
          <DialogCreate open onClose={onClose} onCreate={onCreate} />
        </CareerProvider>
      </SessionProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
