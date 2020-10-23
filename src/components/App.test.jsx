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
  }));

  const { queryByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(2);

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/김초밥/)).not.toBeNull();

  expect(queryByText(/한식/)).not.toBeNull();
  expect(queryByText(/중식/)).not.toBeNull();
  expect(queryByText(/일식/)).not.toBeNull();
});
