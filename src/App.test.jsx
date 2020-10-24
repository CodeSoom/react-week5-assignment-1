import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows app name', () => {
    const { getByText } = render(<App />);

    expect(getByText('Restaurants')).not.toBeNull();
  });

  it('check the initial states are mounted', () => {
    render(<App />);

    expect(dispatch).toBeCalledTimes(2);
  });
});
