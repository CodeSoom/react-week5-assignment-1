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

  context('레스토랑이 있을 때', () => {
    it('레스토랑 목록이 랜더링된다', () => {
      renderRestaurants({ restaurants: restaurantsList });

      expect(screen.getByText('맛나')).not.toBeNull();
    });
  });

  context('레스토랑이 없을 때', () => {
    const { container } = renderRestaurants({
      restaurants: [],
    });

    expect(container).toHaveTextContent('레스토랑이 존재하지 않습니다.');
  });
});
