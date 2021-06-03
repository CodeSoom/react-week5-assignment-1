import { setCategories, setRegions } from './groupsSlice';
import { fetchRegions, fetchCategories, fetchRestaurants } from '../servies/api';
import { updateRestaurants } from './selectedSlice';

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadRestuarants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();
    dispatch(updateRestaurants(restaurants));
  };
}
