import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  it('shows restaurants when category, region clicked', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { container } = render((
      <RestaurantsContainer />
    ));

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
