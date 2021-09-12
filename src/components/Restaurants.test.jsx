import { render } from '@testing-library/react';

import restaurants from '../../fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  function renderRestaurants(restaurantsData) {
    return render((
      <Restaurants restaurants={restaurantsData} />
    ));
  }

  it('shows restaurants', () => {
    const { container } = renderRestaurants(restaurants);

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
