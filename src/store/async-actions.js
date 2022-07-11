import { setCategories, setRegions, setRestaurants } from './actions';

import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

export function getRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function getCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function getRestaurants({ region, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ region, categoryId });

    dispatch(setRestaurants(restaurants));
  };
}
