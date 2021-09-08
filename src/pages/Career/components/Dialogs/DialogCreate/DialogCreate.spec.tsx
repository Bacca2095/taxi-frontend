import React from 'react';
import nock from 'nock';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { SessionContext, SessionProvider } from 'context/SessionContext';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import * as careerFixture from 'tests/fixtures/career.fixture';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { act } from 'react-dom/test-utils';
import { DialogCreate } from '.';

describe('Dialog Create tests', () => {
  let onClose: jest.Mock;
  let onCreate: jest.Mock;
  let setDocument: jest.Mock;
  let clearSession: jest.Mock;
  let careers: CareerModel[];
  let career: CareerModel;
  const document = '12345';
  const sessionId = '12345:::12345';

  beforeEach(() => {
    onClose = jest.fn();
    setDocument = jest.fn();
    clearSession = jest.fn();
    career = careerFixture.getSingle();
    careers = careerFixture.getList();
    onCreate = jest.fn();
    nock('http://localhost:3001/api')
      .persist()
      .get('/carreras/12345')
      .reply(200, careers)
      .post('/carreras')
      .reply(201, {});
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
          <DialogCreate open onClose={onClose} onCreate={onCreate} />
        </CareerProvider>
      </SessionContext.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should test not save', async () => {
    career = careerFixture.getSingle();
    careers = careerFixture.getList();

    const { findByTestId, findAllByText } = render(
      <SessionContext.Provider
        value={{
          data: { document, sessionId },
          mutations: { setDocument, clearSession },
        }}
      >
        <CareerProvider>
          <DialogCreate open onClose={onClose} onCreate={onCreate} />
        </CareerProvider>
      </SessionContext.Provider>,
    );

    const name = await findByTestId('input-name');
    const phone = await findByTestId('input-phone');
    const address = await findByTestId('input-address');

    fireEvent.change(name, { target: { value: career.nombre } });
    fireEvent.change(phone, { target: { value: career.telefono } });
    fireEvent.change(address, { target: { value: career.direccion } });

    fireEvent.change(name, { target: { value: '' } });
    fireEvent.change(phone, { target: { value: '' } });
    fireEvent.change(address, { target: { value: '' } });

    const count = await findAllByText(/obligatorio/i);

    expect(count.length).toBe(3);
  });
});
