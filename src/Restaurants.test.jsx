import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../__fixtures__/restaurants';

describe('Restaurants', () => {
  function renderRestaurants(restaurantList = []) {
    return render((
      <Restaurants restaurants={restaurantList} />
    ));
  }

  context('with restaurants', () => {
    it('show restaurants', () => {
      const { getByText } = renderRestaurants(restaurants);

      restaurants.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });
  });

  context('without restaurants', () => {
    it('shows nothing message', () => {
      const { getByText } = renderRestaurants();

      expect(getByText(/레스토랑이 없습니다/)).not.toBeNull();
    });
  });
});
