import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    {
      id: 1, name: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
    },
  ];

  const { getByText } = render((
    <Restaurants
      restaurants={restaurants}
    />
  ));

  expect(getByText(/김밥제국/)).not.toBeNull();
  expect(getByText(/분식/)).not.toBeNull();
  expect(getByText(/서울시 강남구 역삼동/)).not.toBeNull();
});
