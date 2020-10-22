import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(<App />);

  const { getByText, getByRole } = screen;

  expect(getByRole('button', { name: /서울/ })).toBeInTheDocument();
  expect(getByRole('button', { name: /대전/ })).toBeInTheDocument();
  expect(getByRole('button', { name: /한식/ })).toBeInTheDocument();
  expect(getByRole('button', { name: /중식/ })).toBeInTheDocument();
  expect(getByText(/양천주가/)).toBeInTheDocument();
  expect(getByText(/한국식 초밥/)).toBeInTheDocument();
});
