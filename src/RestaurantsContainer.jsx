import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <Restaurants restaurants={restaurants} />
  );
}
