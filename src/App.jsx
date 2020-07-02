import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import {
  loadRegions, loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO 지역, 카테고리 불러오기
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  const { restaurants } = useSelector((selector) => ({
    restaurants: selector.restaurants,
  }));

  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
      <ul>
        {restaurants
      && restaurants.length > 0
      && restaurants.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))}
      </ul>
    </>
  );
}
