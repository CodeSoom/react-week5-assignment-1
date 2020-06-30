import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';
import { categories } from '../fixture/test-data';

jest.mock('react-redux');

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/중식/)).not.toBeNull();
});
