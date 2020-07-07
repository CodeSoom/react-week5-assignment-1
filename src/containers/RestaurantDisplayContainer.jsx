import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { loadRestaurants } from '../actions';

import List from '../components/List';

export default function RestaurantDisplayContainer() {
  const { restaurants, selectedCategoryId, selectedRegionId } = useSelector((state) => ({
    restaurants: state.restaurants,
    selectedCategoryId: state.selectedCategoryId,
    selectedRegionId: state.selectedRegionId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [selectedCategoryId, selectedRegionId]);

  return (
    <List items={restaurants} />
  );
}
