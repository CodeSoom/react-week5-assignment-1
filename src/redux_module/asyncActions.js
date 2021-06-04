import { setCategories, setRegions, setSelectedRestaurants } from './RestaurantSlice';
import { fetchRegions, fetchCategories, fetchRestaurants } from '../servies/api';

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  return dispatch(setCategories(categories));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  return dispatch(setRegions(regions));
};

export const loadRestaurants = (regionName, categoryId) => async (dispatch) => {
  const restaurants = await fetchRestaurants(regionName, categoryId);
  return dispatch(setSelectedRestaurants(restaurants));
};
