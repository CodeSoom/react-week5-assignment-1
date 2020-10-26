import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from '../services/api';

import {
  setCategories, updateCategoriesLoading,
} from './categoryActions';

import {
  setRegions, updateRegionsLoading,
} from './regionActions';

import {
  setRestaurants,
  updateRestaurantsLoading,
} from './restaurantActions';

export function loadCategories() {
  return async (dispatch) => {
    dispatch(updateCategoriesLoading(true));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));

    return dispatch(updateCategoriesLoading(false));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    dispatch(updateRegionsLoading(true));

    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    return dispatch(updateRegionsLoading(false));
  };
}

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    dispatch(updateRestaurantsLoading(true));

    const restaurants = await fetchRestaurants(regionName, categoryId);
    dispatch(setRestaurants(restaurants));

    return dispatch(updateRestaurantsLoading(false));
  };
}

export function searchRestaurants() {
  return (dispatch, getState) => {
    const { category, region } = getState();
    const { selectedId: categoryId } = category;
    const { selectedName: regionName } = region;

    if (!categoryId || !regionName) {
      return;
    }

    dispatch(loadRestaurants(regionName, categoryId));
  };
}
