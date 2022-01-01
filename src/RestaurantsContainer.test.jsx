import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from './fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantsList: restaurants,
  }));

  const { getByText } = render(<RestaurantsContainer />);

  expect(dispatch).toBeCalledTimes(1);

  restaurants.forEach((restaurant) => {
    expect(getByText(restaurant.name)).not.toBeNull();
  });
});
