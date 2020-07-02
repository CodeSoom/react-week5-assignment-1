import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import { categories, regions } from '../fixture/test-data';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();

  expect(getByText(/서울/)).not.toBeNull();
  expect(getByText(/대전/)).not.toBeNull();
});
