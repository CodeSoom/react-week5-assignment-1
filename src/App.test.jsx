import React from 'react';

import { useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);
  });

  it('renders', () => {
    const { container } = render(<App />);

    expect(container).not.toBeNull();
  });
});
