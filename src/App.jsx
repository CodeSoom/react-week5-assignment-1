import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import PlacesContainer from './containers/PlacesContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';
import CategoriesContainer from './containers/CategoriesContainer';

import {
  loadPlaces,
  loadCategories,
} from './modules/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaces());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <div>Locations</div>
      <PlacesContainer />
      <div>Categories</div>
      <CategoriesContainer />
      <div>Restaurants</div>
      <RestaurantsContainer />
    </div>
  );
}
