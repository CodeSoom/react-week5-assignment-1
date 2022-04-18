import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import LocationsContainer from './LocationsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsListContainer from './RestaurantsListContainer';

import {
  setLocations,
  setCategories,
  setRestaurants,
} from './actions';

function loadLocations({ dispatch }) {
  const locations = [];
  // TODO: load locations from API server
  // fetch
  dispatch(setLocations(locations));
}

function loadCategories({ dispatch }) {
  const categories = [];
  // TODO: load locations from API server
  // fetch
  dispatch(setCategories(categories));
}

function loadRestaurants({ dispatch }) {
  const restaurants = [];
  // TODO: load locations from API server
  // fetch
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
