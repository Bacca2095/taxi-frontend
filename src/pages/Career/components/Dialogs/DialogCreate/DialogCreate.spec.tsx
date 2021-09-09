import React from 'react';
import nock from 'nock';
import { render, fireEvent, waitFor, act } from '@testing-library/react';
import { SessionContext } from 'context/SessionContext';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import * as careerFixture from 'tests/fixtures/career.fixture';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { DialogCreate } from '.';

describe('Dialog Create tests', () => {
  let onClose: jest.Mock;
  let onCreate: (career: CareerModel) => void;
  let setDocument: jest.Mock;
  let clearSession: jest.Mock;
  let careers: CareerModel[];
  let career: CareerModel;
  const document = '12345';
  const sessionId = '12345:::12345';

  beforeAll(() => {
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

  it('should match snapshot', async () => {
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
    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });

  it('should test not save', async () => {
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
    const save = await findByTestId('dialog-create-submit');

    fireEvent.change(name, { target: { value: career.nombre } });
    fireEvent.change(phone, { target: { value: career.telefono } });
    fireEvent.change(address, { target: { value: career.direccion } });

    fireEvent.change(name, { target: { value: '' } });
    fireEvent.change(phone, { target: { value: '' } });
    fireEvent.change(address, { target: { value: '' } });

    fireEvent.click(save);

    const count = await findAllByText(/obligatorio/i);

    expect(count.length).toBe(3);
  });

  it('should test save', async () => {
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

    fireEvent.change(name, { target: { value: career.nombre } });
    fireEvent.change(phone, { target: { value: career.telefono } });
    fireEvent.change(address, { target: { value: career.direccion } });
    fireEvent.change(date, { target: { value: career.fechaRecogida } });

    const save = await findByTestId('dialog-create-submit');

    await act(async () => {
      fireEvent.click(save);
    });

    await waitFor(() => {
      expect(onCreate).toHaveBeenCalled();
    });
  });
});
