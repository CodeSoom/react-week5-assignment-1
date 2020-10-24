import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import initialRestaurants from '../__fixtures__/restaurants';

describe('Restaurants', () => {
  function renderRestaurants(restaurants = []) {
    return render((
      <Restaurants restaurants={restaurants} />
    ));
  }

  context('with restaurants', () => {
    it('show restaurants', () => {
      const { getByText } = renderRestaurants(initialRestaurants);

      initialRestaurants.forEach(({ name }) => {
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
