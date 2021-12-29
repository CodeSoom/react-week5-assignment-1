import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../actions/restaurant';
import RestaurantList from './RestaurantList';

export default function RestaurantContainer() {
  const dispatch = useDispatch();
  const {
    restaurants,
    selected: { regionName, categoryId },
  } = useSelector((state) => state.restaurant);

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(loadRestaurants({ regionName, categoryId }));
    }
  }, [regionName, categoryId]);

  return (
    <>
      <RestaurantList restaurants={restaurants} />
    </>
  );
}
