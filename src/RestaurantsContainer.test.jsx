import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantContainer', () => {
  it('renders restaurants', () => {
    const { container } = render(<RestaurantsContainer />);

    restaurants
      .map((restaurant) => restaurant.name)
      .forEach(
        (restaurantName) => expect(container).toHaveTextContent(restaurantName),
      );
  });
});
