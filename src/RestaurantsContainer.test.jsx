import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../__fixtures__/restaurants';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render(
    <RestaurantsContainer />,
  );

  restaurants.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
