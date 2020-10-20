import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

test('Restaurants', () => {
  const restaurants = [
    { id: 1, name: '양천주가' },
    { id: 6, name: '한국식 초밥' },
  ];
  const { container } = render((
    <Restaurants restaurants={restaurants} />
  ));

  restaurants.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
