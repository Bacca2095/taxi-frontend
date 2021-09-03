import React from 'react';
import nock from 'nock';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { SessionContext, SessionProvider } from 'context/SessionContext';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import * as careerFixture from 'tests/fixtures/career.fixture';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { matches } from 'lodash';
import { DialogCreate } from '.';

describe('Dialog Create tests', () => {
  let onClose: jest.Mock;
  let onCreate: jest.Mock;
  let setDocument: jest.Mock;
  let clearSession: jest.Mock;
  let careers: CareerModel[];
  let career: CareerModel;

  beforeEach(() => {
    onClose = jest.fn();
    onCreate = jest.fn();
    setDocument = jest.fn();
    clearSession = jest.fn();
    careerFixture.getSingle();
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

  /* it('should test save', async () => {
    career = careerFixture.getSingle();
    careers = careerFixture.getList();
    const document = '12345';
    const sessionId = '12345:::12345';

    nock('http://localhost:3001/api')
      .persist()
      .get('/carreras/12345')
      .reply(200, careers);

    const { findByTestId } = render(
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
    const date = await findByTestId('input-date');
    const saveButton = await findByTestId('dialog-create-button');

    fireEvent.change(name, { target: { value: career.nombre } });
    fireEvent.change(phone, { target: { value: career.telefono } });
    fireEvent.change(address, { target: { value: career.direccion } });
    fireEvent.change(date, { target: { value: career.fechaRecogida } });

    nock('http://localhost:3001/api').persist().post('/carreras').reply(201);

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(onCreate).toBeCalled();
    });
  }); */
});
