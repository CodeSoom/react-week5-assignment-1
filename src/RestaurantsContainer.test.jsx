import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { id: 1, name: '홍콩반점' },
      { id: 2, name: '한국식 초밥' },
    ],
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText(/홍콩반점/)).not.toBeNull();
  expect(getByText(/한국식 초밥/)).not.toBeNull();
});
