import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

import { searchRestaurants } from './async-actions';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('./async-actions');

describe('RestaurantsContainer', () => {
  const selectedRegion = regions[1];
  const selectedCategory = categories[1];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('with selectedRegion and selectedCategory', () => {
    const mockUseSelector = () => useSelector.mockImplementation(
      (state) => state({
        restaurants,
        selectedRegion,
        selectedCategory,
      }),
    );

    it('dispatches searchRestaurants', () => {
      mockUseSelector();

      render(<RestaurantsContainer />);

      expect(dispatch).toHaveBeenCalledWith(
        searchRestaurants({
          region: selectedRegion,
          category: selectedCategory,
        }),
      );
    });

    it('renders searched restaurants', () => {
      mockUseSelector();

      const { container } = render(<RestaurantsContainer />);

      restaurants
        .map((restaurant) => restaurant.name)
        .forEach(
          (restaurantName) => expect(container).toHaveTextContent(restaurantName),
        );
    });
  });

  context('without selectedRegion or selectedCategory', () => {
    it("doesn't dispatch anything", () => {
      useSelector.mockImplementation((state) => state({
        restaurants: [],
      }));

      render(<RestaurantsContainer />);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
