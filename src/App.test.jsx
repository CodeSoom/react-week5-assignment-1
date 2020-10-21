import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '홍콩반점' },
      { id: 2, name: '한국식 초밥' },
    ],
  }));
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/홍콩반점/)).not.toBeNull();
});
