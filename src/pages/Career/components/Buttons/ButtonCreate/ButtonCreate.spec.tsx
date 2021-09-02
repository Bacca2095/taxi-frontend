import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonCreate } from '.';

describe('ButtonCreate tests', () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(<ButtonCreate onClick={onClick} />);

    expect(container).toMatchSnapshot();
  });

  it('should click on create', async () => {
    const { findByTestId } = render(<ButtonCreate onClick={onClick} />);

    const createButton = await findByTestId('create');

    fireEvent.click(createButton);

    expect(onClick).toBeCalled();
  });
});
