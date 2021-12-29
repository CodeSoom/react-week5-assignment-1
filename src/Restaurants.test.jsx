import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

jest.mock('react-redux');

describe('Restaurants', () => {
  const restaurants = [
    {
      id: 1,
      name: '모토쿠라시',
      category: '일식',
      place: '서울시 송파구',
    },
  ];

  const renderRestaurants = () => render((
    <Restaurants
      restaurants={restaurants}
    />
  ));

  it('sets restaurants', () => {
    const { container } = renderRestaurants();

    expect(container).toHaveTextContent('모토쿠라시');
  });
});
