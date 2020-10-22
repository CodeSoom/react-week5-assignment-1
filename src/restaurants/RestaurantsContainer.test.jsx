import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../../fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantData: {
      restaurants,
    },
    loadingState: {},
  }));

  const { queryByText } = render((
    <RestaurantsContainer />
  ));

  expect(queryByText(/양천주가/)).not.toBeNull();
});
