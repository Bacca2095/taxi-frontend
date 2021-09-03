import React from 'react';
import nock from 'nock';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { SessionProvider } from 'context/SessionContext';
import { CareerProvider } from 'pages/Career/context/CareerContext';
import * as careerFixture from 'tests/fixtures/career.fixture';
import { CareerModel } from 'pages/Career/models/CareerModel';
import { matches } from 'lodash';
import { DialogCreate } from '.';

describe('Dialog Create tests', () => {
  let onClose: jest.Mock;
  let onCreate: jest.Mock;
  let careers: CareerModel[];
  let career: CareerModel;

  beforeEach(() => {
    onClose = jest.fn();
    onCreate = jest.fn();
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

  it('should test save', async () => {
    career = careerFixture.getSingle();
    careers = careerFixture.getList();

    nock('http://localhost:3001/api')
      .persist()
      .get('/carreras/12345')
      .reply(200, careers)
      .post('/carreras', matches(career))
      .reply(201);

    const { findByTestId } = render(
      <SessionProvider>
        <CareerProvider>
          <DialogCreate open onClose={onClose} onCreate={onCreate} />
        </CareerProvider>
      </SessionProvider>,
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

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(onCreate).toBeCalled();
    });
  });
});
