import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

import {
  setCategories,
  setRegions,
  setRestaurnats,
} from './actions';

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurnats({ region, category }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ region, category });
    dispatch(setRestaurnats(restaurants));
  };
}
