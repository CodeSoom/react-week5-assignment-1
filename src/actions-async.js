import { getCategories, getRegions, getRestaurants } from './actions';

import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(getRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(getCategories(categories));
  };
}

export function loadRestaurants(region, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, categoryId);

    dispatch(getRestaurants(restaurants));
  };
}
