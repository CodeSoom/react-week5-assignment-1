import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import PlacesContainer from './containers/PlacesContainer';
import RestaurantsContainer from './containers/RestaurantsContainer';
import CategoriesContainer from './containers/CategoriesContainer';

import {
  setPlaces,
  setCategories,
  setRestaurants,
} from './modules/actions';

import places from '../fixtures/places';
import restaurants from '../fixtures/restaurants';
import categories from '../fixtures/categories';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlaces(places));
    dispatch(setCategories(categories));
    dispatch(setRestaurants(restaurants));
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
