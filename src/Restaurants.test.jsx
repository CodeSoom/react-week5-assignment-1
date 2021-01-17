import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from './fixtures/restaurants';

describe('Restaurants', () => {
  const renderRestaurants = () => render(
    <Restaurants
      restaurants={restaurants}
    />,
  );

  it('show all Restaurants', () => {
    const { getByText } = renderRestaurants();

    restaurants.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();
    });
  });
});
