import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { get } from './utils';

export default function RegionsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
