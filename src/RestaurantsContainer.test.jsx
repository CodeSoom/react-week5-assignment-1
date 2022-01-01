import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from './fixtures/restaurants';

jest.mock('react-redux');

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantsList: restaurants,
  }));

  const { getByText } = render(<RestaurantsContainer />);

  restaurants.forEach((restaurant) => {
    expect(getByText(restaurant.name)).not.toBeNull();
  });
});
