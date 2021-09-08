import React from 'react';
import { render } from '@testing-library/react';
import { SnackbarDelete } from '.';

describe('Snackbar Delete tests', () => {
  let onClick: jest.Mock;
  let onClose: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    onClose = jest.fn();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <SnackbarDelete open onClose={onClose} state={false} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <SnackbarDelete open onClose={onClose} state />,
    );
    expect(container).toMatchSnapshot();
  });
});
