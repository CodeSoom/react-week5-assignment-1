import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import App from './App';
import regions from '../fixtures/regions';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    selected: {},
  }));
  render(<App />);

  const { getByText, getByRole } = screen;

  expect(getByRole('button', { name: /서울/ })).toBeInTheDocument();
  expect(getByRole('button', { name: /대전/ })).toBeInTheDocument();
  expect(getByRole('button', { name: /한식/ })).toBeInTheDocument();
  expect(getByRole('button', { name: /중식/ })).toBeInTheDocument();
  expect(getByText(/양천주가/)).toBeInTheDocument();
  expect(getByText(/한국식 초밥/)).toBeInTheDocument();
});
