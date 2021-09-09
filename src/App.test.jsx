import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [],
  }));
  it('renders categories', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('한식')).toBeNull();
  });
});
