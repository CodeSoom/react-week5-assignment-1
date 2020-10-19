import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurantRegions from '../__fixtures__/restaurantRegions';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantRegions,
  }));

  const { container } = render((
    <RestaurantRegionsContainer />
  ));

  restaurantRegions.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
