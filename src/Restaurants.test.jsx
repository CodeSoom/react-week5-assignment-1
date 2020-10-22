import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const restaurants = [
    { id: 1, name: '서울' },
  ];

  const renderRestaurants = () => render(
    <Restaurants
      restaurants={restaurants}
    />,
  );

  it('show all Restaurants', () => {
    const { queryByText } = renderRestaurants();

    expect(queryByText('서울')).not.toBeNull();
  });
});
