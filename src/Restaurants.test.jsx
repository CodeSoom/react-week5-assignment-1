import { render } from '@testing-library/react';

import restaurants from '../fixtures/restaurants';
import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('renders restaurants', () => {
    const { container } = render(<Restaurants restaurants={restaurants} />);

    restaurants
      .map((restaurant) => restaurant.name)
      .forEach(
        (restaurantName) => expect(container).toHaveTextContent(restaurantName),
      );
  });
});
