import React from 'react';

import { render } from '@testing-library/react';

import restaurantRegions from '../__fixtures__/restaurantRegions';

import RestaurantRegions from './RestaurantRegions';

test('App', () => {
  const { container } = render((
    <RestaurantRegions restaurantRegions={restaurantRegions} />
  ));

  restaurantRegions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
