import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

import { getRestaurants } from '../store/async-actions';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('../store/async-actions');

describe('RestaurantsContainer', () => {
  const selectedRegion = regions[0];
  const selectedCategory = categories[0];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
    selectedCategory,
    selectedRegion,
  }));

  it('getRestaurants를 dispatch 합니다.', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(dispatch).toHaveBeenCalledWith(
      getRestaurants({
        region: selectedRegion.name,
        categoryId: selectedCategory.id,
      }),
    );

    restaurants.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
