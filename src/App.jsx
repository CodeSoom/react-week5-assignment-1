import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';
// import RestaurantsCreateContainer from './RestaurantsCreateContainer';
import CategoriesContainer from './CategoriesContainer';

import { loadCategories, loadRestaurants } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      {/* <RestaurantsCreateContainer /> */}
    </div>
  );
}
