import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('레스토랑 목록이 보인다.', () => {
    const { getByText } = render(
      <Restaurants
        restaurants={restaurants}
      />,
    );

    restaurants.forEach((restaurant) => {
      const { name } = restaurant;
      expect(getByText(name)).not.toBeNull();
    });
  });
});
