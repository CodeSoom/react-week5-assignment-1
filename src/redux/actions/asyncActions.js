import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from '../../services/api';

import {
  updateCategoriesLoading,
  setCategories,
} from './categoryActions';

import {
  updateRegionsLoading,
  setRegions,
} from './regionActions';

import {
  updateRestaurantsLoading,
  setRestaurants,
} from './restaurantActions';

export function loadInitialState() {
  return async (dispatch) => {
    dispatch(updateCategoriesLoading(true));
    dispatch(updateRegionsLoading(true));

    const [categories, regions] = await Promise.all([
      fetchCategories(),
      fetchRegions(),
    ]);

    dispatch(setCategories(categories));
    dispatch(setRegions(regions));

    dispatch(updateCategoriesLoading(false));
    dispatch(updateRegionsLoading(false));
  };
}

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    dispatch(updateRestaurantsLoading(true));
    const restaurants = await fetchRestaurants(regionName, categoryId);

    dispatch(setRestaurants(restaurants));
    dispatch(updateRestaurantsLoading(false));
  };
}
