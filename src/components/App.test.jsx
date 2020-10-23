import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import { regions } from '../../fixtures';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: {
      regions,
    },
  }));

  const { getByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(1);

  expect(getByText(/서울/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/김초밥/)).not.toBeNull();
});
