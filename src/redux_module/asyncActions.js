import { setCategories, setRegions, setSelectedRestaurants } from './RestaurantSlice';
import { fetchRegions, fetchCategories, fetchRestaurants } from '../servies/api';

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    return dispatch(setCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    return dispatch(setRegions(regions));
  };
}

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(regionName, categoryId);

    return dispatch(setSelectedRestaurants(restaurants));
  };
}
