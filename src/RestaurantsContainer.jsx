import React from 'react';
import { useSelector } from 'react-redux';

import TextList from './TextList';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <TextList
      elements={restaurants}
    />
  );
}
