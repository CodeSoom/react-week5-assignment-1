import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RestaurantsContainer from './RestaurantsContainer';

import RESTAURANTS from '../fixtures/restaurants';

jest.mock('react-redux');

describe('<RestaurantsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: given.restaurants,
  }));

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
});
