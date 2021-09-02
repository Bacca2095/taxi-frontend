import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ButtonLogout } from '.';

describe('ButtonLogout tests', () => {
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(<ButtonLogout onClick={onClick} />);

    expect(container).toMatchSnapshot();
  });

  it('should click on logout', async () => {
    const { findByTestId } = render(<ButtonLogout onClick={onClick} />);

    const logoutButton = await findByTestId('logout');

    fireEvent.click(logoutButton);

    expect(onClick).toBeCalled();
  });
});
