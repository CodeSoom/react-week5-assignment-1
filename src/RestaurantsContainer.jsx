import React from 'react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return <ListContainer restaurants={restaurants} />;
}
