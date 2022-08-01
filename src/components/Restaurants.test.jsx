import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import RESTAURANTS from '../fixtures/restaurants';

describe('<Restaurants />', () => {
  const renderRestaurants = (restaurants) => render(<Restaurants restaurants={restaurants} />);

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { container } = renderRestaurants(RESTAURANTS);

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
      });
    });
  });

  context('without restaurants', () => {
    it('renders "레스토랑을 불러오지 못했습니다."', () => {
      const { getByText } = renderRestaurants([]);

      expect(getByText('레스토랑을 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });
});
