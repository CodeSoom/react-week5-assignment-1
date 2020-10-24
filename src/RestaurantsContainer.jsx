import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <p>양천주가</p>
  );
}
