import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('renders restaurants', () => {
    const { getAllByRole } = render((
      <Restaurants restaurants={restaurants} />
    ));

    restaurants.forEach((restaurant, index) => {
      expect(getAllByRole('listitem')[index].textContent).toBe(restaurant.name);
    });
  });
});
