import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import LocationsContainer from './LocationsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsListContainer from './RestaurantsListContainer';

import {
  loadLocations,
  loadCategories,
  loadRestaurants,
} from './actions';

export default function App() {
  const { locationName, categoryId } = useSelector((state) => ({
    locationName: state.locationName,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocations());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurants({ locationName, categoryId }));
  }, [locationName, categoryId]);

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
