import { useEffect } from 'react';

import LocationsContainer from './LocationsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsListContainer from './RestaurantsListContainer';

import {
  setLocations,
  setCategories,
  setRestaurants,
} from './actions';

import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

async function loadLocations({ dispatch }) {
  const locations = await fetchLocations();

  dispatch(setLocations(locations));
}

async function loadCategories({ dispatch }) {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
}

async function loadRestaurants({ dispatch }) {
  const restaurants = await fetchRestaurants();

  dispatch(setRestaurants(restaurants));
}

export default function App() {
  useEffect(() => {
    loadLocations();
    loadCategories();
    loadRestaurants();
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <h2>Location</h2>
      <LocationsContainer />
      <h2>Category</h2>
      <CategoriesContainer />
      <h2>Restaurants</h2>
      <RestaurantsListContainer />
    </>
  );
}
