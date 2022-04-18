import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

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

async function loadRestaurants({ dispatch, locationId, categoryId }) {
  const locations = await fetchLocations();
  const regionName = locations.find((location) => location.id === locationId).name;
  const restaurants = await fetchRestaurants({ regionName, categoryId });

  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const { locationId, categoryId } = useSelector((state) => ({
    locationId: state.locationId,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    loadLocations({ dispatch });
    loadCategories({ dispatch });
  }, []);

  useEffect(() => {
    loadRestaurants({ dispatch, locationId, categoryId });
  }, [locationId, categoryId]);

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
