import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

import { searchRestaurants } from './async-actions';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./async-actions');

describe('RestaurantContainer', () => {
  const selectedRegion = regions[1];
  const selectedCategory = categories[1];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    restaurants,
    selectedRegion,
    selectedCategory,
  }));

  it('renders searched restaurants', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(dispatch).toHaveBeenCalledWith(
      searchRestaurants({
        region: selectedRegion,
        category: selectedCategory,
      }),
    );
    restaurants
      .map((restaurant) => restaurant.name)
      .forEach(
        (restaurantName) => expect(container).toHaveTextContent(restaurantName),
      );
  });
});
