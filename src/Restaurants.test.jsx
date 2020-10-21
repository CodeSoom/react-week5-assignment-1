import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

test('RestaurantsContainer', () => {
  const { getByText } = render((
    <Restaurants
      restaurants={restaurants}
    />
  ));

  expect(getByText(/홍콩반점/)).not.toBeNull();
  expect(getByText(/한국식 초밥/)).not.toBeNull();
});
