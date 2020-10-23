import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../__fixtures__/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderRestaurants = () => render(
    <RestaurantsContainer />,
  );

  it('renders Restaurants', () => {
    const { container } = renderRestaurants();

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
