import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import restaurants from '../fixtures/restaurants';

import categories from '../fixtures/categories';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
    categories,
  }));
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/홍콩반점/)).not.toBeNull();
});
