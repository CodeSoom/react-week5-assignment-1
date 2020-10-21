import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function App() {
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
