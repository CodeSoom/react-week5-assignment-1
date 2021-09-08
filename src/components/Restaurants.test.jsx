import React from 'react';

import { render } from '@testing-library/react';

import restaurants from '../../fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  function renderRestaurants() {
    return render((
      <Restaurants restaurants={restaurants} />
    ));
  }

  context('with restaurants list', () => {
    it('shows restaurants list', () => {
      const { container } = renderRestaurants(restaurants);

      restaurants.forEach(({ name }) => {
        expect(container).toHaveTextContent(name);
      });
    });
  });
});
