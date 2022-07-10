import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { loadRestaurants } from '../store/async-actions';

import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../fixtures/restaurants';
import REGIONS from '../fixtures/regions';
import CATEGORIES from '../fixtures/categories';

jest.mock('react-redux');
jest.mock('../store/async-actions');

describe('<RestaurantsContainer />', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: given.restaurants,
    selectedRegionId: given.selectedRegionId,
    selectedCategoryId: given.selectedCategoryId,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  context('with restaurants', () => {
    given('restaurants', () => RESTAURANTS);

    it('renders restaurants', () => {
      const { container } = renderRestaurantsContainer();

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
      });
    });
  });

  context('without restaurants', () => {
    given('restaurants', () => []);

    it('renders "레스토랑을 불러오지 못했습니다."', () => {
      const { getByText } = renderRestaurantsContainer();

      expect(getByText('레스토랑을 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });

  context('with selectedRegionId and selectedCategoryId', () => {
    given('selectedRegionId', () => REGIONS[0].id);
    given('selectedselectedCategoryIdRegionId', () => CATEGORIES[0].id);

    it('dispatch load restaurants', () => {
      renderRestaurantsContainer();

      expect(loadRestaurants).toBeCalled();
    });
  });
});
