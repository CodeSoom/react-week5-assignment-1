import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function CategoriesContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <Restaurants
      categories={restaurants}
    />
  );
}
