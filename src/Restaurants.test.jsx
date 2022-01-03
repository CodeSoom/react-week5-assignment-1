// Presentational Components: 레스토랑 목록을 그려주는 것에 대한 테스트
import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const restaurants = [
    {
      id: 1,
      name: '모토쿠라시',
      category: '일식',
      place: '서울시 송파구',
    },
  ];

  it('sets restaurants', () => {
    const renderRestaurants = () => render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    const { container } = renderRestaurants();

    expect(container).toHaveTextContent('모토쿠라시');
    expect(container).toHaveTextContent('일식');
    expect(container).toHaveTextContent('서울시 송파구');
  });
});
