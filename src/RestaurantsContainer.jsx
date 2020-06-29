import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const restaurants = [
    {
      id: 1,
      name: '홍콩반점',
    },
  ];

  return <Restaurants restaurants={restaurants} />;
}
