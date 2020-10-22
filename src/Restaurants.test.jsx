import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../__fixtures__/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  function renderRestaurants(restaurantsData) {
    return render((
      <Restaurants restaurants={restaurantsData} />
    ));
  }

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { container } = renderRestaurants(restaurants);

      restaurants.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });

  context('without restaurants', () => {
    it('renders nothing', () => {
      const emptyRestaurants = [];

      const { container } = renderRestaurants(emptyRestaurants);

      restaurants.forEach(({ name }) => {
        expect(container).not.toHaveTextContent(name);
      });
    });
  });
});
