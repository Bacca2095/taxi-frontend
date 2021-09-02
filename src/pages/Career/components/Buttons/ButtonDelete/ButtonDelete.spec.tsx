import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonDelete } from '.';

describe('ButtonDelete tests', () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(<ButtonDelete onClick={onClick} />);

    expect(container).toMatchSnapshot();
  });

  it('should click on delete', async () => {
    const { findByTestId } = render(<ButtonDelete onClick={onClick} />);

    const deleteButton = await findByTestId('delete');

    fireEvent.click(deleteButton);

    expect(onClick).toBeCalled();
  });
});
