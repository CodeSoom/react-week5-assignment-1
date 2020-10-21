import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { setRestaurants } from './actions';

function loadRestaurants({ dispatch }) {
  const restaurants = [];

  dispatch(setRestaurants(restaurants));
}
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRestaurants({ dispatch });
  });

  const { restaurants } = useSelector((state) => ({
    restaurants: [
      { id: 1, name: '도미노피자' },
      { id: 2, name: ' 치킨' },
    ],
  }));

  return (
    <Restaurants restaurants={restaurants} />
  );
}
