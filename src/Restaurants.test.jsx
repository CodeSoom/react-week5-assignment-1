import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  function renderRestaurants(restaurants) {
    return render((
      <Restaurants
        restaurants={restaurants}
      />
    ));
  }

  it('renders restaurants', () => {
    const restaurants = [{ id: 1, name: '양천주가' }];

    const { queryByText } = renderRestaurants(restaurants);

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
