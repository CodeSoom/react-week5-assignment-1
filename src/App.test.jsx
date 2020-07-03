import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import { regions, categories } from '../fixture/test-data';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/서울/)).not.toBeNull();
  expect(getByText(/대전/)).not.toBeNull();

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();

  fireEvent.click(getByText(/서울/));
  fireEvent.click(getByText(/한식/));

  expect(getByText(/양천주가/));
  expect(getByText(/한국식 초밥/));
});
