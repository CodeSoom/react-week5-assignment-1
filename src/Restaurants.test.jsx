import { render, screen } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants as restaurantsList } from '../fixtures/data';

jest.mock('react-redux');

describe('Restaurants', () => {
  const renderRestaurants = ({ restaurants = [] }) => render((
    <Restaurants
      restaurants={restaurants}
    />
  ));

  context('레스토랑 데이터가 없을 시', () => {
    const { container } = renderRestaurants({
      restaurants: [],
    });

    expect(container).toHaveTextContent('레스토랑이 없어요!');
  });

  context('레스토랑 데이터가 있을 시', () => {
    it('레스토랑 목록이 나타난다', () => {
      renderRestaurants({ restaurants: restaurantsList });

      expect(screen.getByText('양천주가')).not.toBeNull();
    });
  });
});
