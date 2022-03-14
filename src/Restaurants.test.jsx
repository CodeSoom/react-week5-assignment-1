import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import restaurants from './fixtures/restaurants';

jest.mock('react-redux');
test('Restaurants', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurantsList: restaurants,
  }));

  const { getByText } = render(<Restaurants
    restaurants={restaurants}
  />);

  restaurants.forEach((restaurant) => {
    expect(getByText(restaurant.name)).not.toBeNull();
  });
});
