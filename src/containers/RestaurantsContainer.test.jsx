import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Restaurants from '../components/Restaurants';

import restaurants from '../../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { container } = render((
    <RestaurantsContainer />
  ));
});
