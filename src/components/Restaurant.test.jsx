import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANTS from '../fixtures/restaurants';

describe('<Restaurant />', () => {
  const renderRestaurant = (restaurant) => render(<Restaurant restaurant={restaurant} />);

  it('renders restaurant', () => {
    const restaurant = RESTAURANTS[0];

    const { getByText } = renderRestaurant(restaurant);

    expect(getByText(restaurant.name)).toBeInTheDocument();
  });
});
