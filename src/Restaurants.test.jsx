import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render((
    <Restaurants
      restaurants={restaurants}
    />
  ));

  const restaurantData = restaurants.map((restaurant) => restaurant.name);

  it('renders Restaurants', () => {
    const { queryByText } = renderRestaurants();

    restaurantData.forEach((restaurant) => {
      expect(queryByText(restaurant)).not.toBeNull();
    });
  });
});
