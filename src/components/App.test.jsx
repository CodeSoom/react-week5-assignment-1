import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import { regions, categories } from '../../fixtures';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: {
      regions,
    },
    category: {
      categories,
    },
    restaurant: {
      restaurants: [],
    },
  }));

  const { queryByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(3);

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/중식/)).not.toBeNull();

  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/중식/)).not.toBeNull();
  expect(queryByText(/일식/)).not.toBeNull();

  expect(queryByText(/양천주가/)).toBeNull();
  expect(queryByText(/김초밥/)).toBeNull();
});
