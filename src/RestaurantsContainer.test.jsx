import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((
    <RestaurantsContainer />
  ));

  expect(getByText('베니스')).not.toBeNull();
});
