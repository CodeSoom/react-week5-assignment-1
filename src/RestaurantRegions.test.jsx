import React from 'react';

import { render } from '@testing-library/react';

import RestaurantRegions from './RestaurantRegions';

test('App', () => {
  const restaurantRegions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  const { container } = render((
    <RestaurantRegions restaurantRegions={restaurantRegions} />
  ));

  restaurantRegions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
