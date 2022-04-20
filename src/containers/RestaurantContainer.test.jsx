import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import given from 'given2';
import 'given2/setup';

import restaurants from '../fixtures/restaurants';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  given('restaurants', () => restaurants);

  useSelector.mockImplementation((selector) => selector({
    restaurants: given.restaurants,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRestaurantContainer() {
    return render(<RestaurantContainer />);
  }

  context('with restaurants', () => {
    it('renders restaurants', () => {
      given('restaurants', () => restaurants);

      const { queryByText } = renderRestaurantContainer();

      expect(queryByText(/두향/)).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders "식당이 없어요!"', () => {
      given('restaurants', () => []);

      const { container } = renderRestaurantContainer();
      expect(container).toHaveTextContent(/식당이 없어요!/);
    });
  });
});
