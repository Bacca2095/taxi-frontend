import React from 'react';
import nock from 'nock';
import { render } from '@testing-library/react';
import { SessionContext } from 'context/SessionContext';
import * as careerFixture from 'tests/fixtures/career.fixture';
import { CareerPage } from '.';
import { CareerModel } from './models/CareerModel';

const defaultProps: any = {
  history: {
    replace: jest.fn(),
  },
};

describe('Career Page tests', () => {
  let setDocument: jest.Mock;
  let clearSession: jest.Mock;
  let careers: CareerModel[];
  const document = '12345';
  const sessionId = '12345:::12345';

  beforeAll(() => {
    setDocument = jest.fn();
    clearSession = jest.fn();
    careers = careerFixture.getList();
    nock('http://localhost:3001/api')
      .persist()
      .get('/carreras/12345')
      .reply(200, careers);
  });

  it('should match snapshot', () => {
    const { container } = render(
      <SessionContext.Provider
        value={{
          data: { document, sessionId },
          mutations: { setDocument, clearSession },
        }}
      >
        <CareerPage {...defaultProps} />
      </SessionContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
