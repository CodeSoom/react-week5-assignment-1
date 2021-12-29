import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantList from './RestaurantList';

export default function RestaurantContainer() {
  const { restaurants } = useSelector((state) => state.restaurant);
  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  );
}
