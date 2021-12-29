import React from 'react';
import RestaurantCategoriesContainer from '../components/RestaurantCategoriesContainer';
import RestaurantRegionsContainer from '../components/RestaurantRegionsContainer';
import RestaurantsContainer from '../components/RestaurantsContainer';

export default function RestaurantPage() {
  return (
    <>
      <RestaurantRegionsContainer />
      <RestaurantCategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
