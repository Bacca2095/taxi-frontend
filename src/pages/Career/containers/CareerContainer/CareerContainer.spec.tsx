import React from 'react';
import nock from 'nock';
import { render } from '@testing-library/react';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import { SessionContext } from 'context/SessionContext';
import * as careerFixture from 'tests/fixtures/career.fixture';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { CareerContainer } from '.';

describe('Career Container tests', () => {
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
        <CareerProvider>
          <CareerContainer />
        </CareerProvider>
      </SessionContext.Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
