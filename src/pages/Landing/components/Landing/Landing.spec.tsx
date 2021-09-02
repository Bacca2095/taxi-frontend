import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Landing } from '.';

describe('Landing tests', () => {
  let onContinue: jest.Mock;

  beforeEach(() => {
    onContinue = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(<Landing onContinue={onContinue} />);

    expect(container).toMatchSnapshot();
  });

  it('should click on login without document', async () => {
    const { findByTestId } = render(<Landing onContinue={onContinue} />);

    const loginButton = await findByTestId('login');

    fireEvent.click(loginButton);

    expect(onContinue).not.toBeCalled();
  });

  it('should click on login with document', async () => {
    const { findByTestId, findByDisplayValue } = render(
      <Landing onContinue={onContinue} />,
    );

    const documentInput = await findByDisplayValue('');

    const loginButton = await findByTestId('login');

    fireEvent.change(documentInput, {
      target: { value: '123' },
    });

    fireEvent.click(loginButton);

    expect(onContinue).toBeCalled();
  });
});
