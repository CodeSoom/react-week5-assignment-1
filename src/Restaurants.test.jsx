import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from './fixtures/restaurants';

describe('Restaurants', () => {
  it('show all restaurants information', () => {
    const { getByText } = render(<Restaurants restaurants={restaurants} />);

    restaurants.forEach((restaurant) => {
      expect(getByText(`${restaurant.name}`)).not.toBeNull();
    });
  });
});
