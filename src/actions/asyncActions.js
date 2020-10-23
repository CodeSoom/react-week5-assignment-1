import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from '../services/api';

import {
  setCategories,
} from './categoryActions';
import { updateInitialLoading } from './helperActions';

import {
  setRegions,
} from './regionActions';

import {
  updateRestaurantsLoading,
  setRestaurants,
} from './restaurantActions';

export function loadInitialState() {
  return async (dispatch) => {
    dispatch(updateInitialLoading(true));

    const [categories, regions] = await Promise.all([
      fetchCategories(),
      fetchRegions(),
    ]);

    dispatch(setCategories(categories));
    dispatch(setRegions(regions));

    dispatch(updateInitialLoading(false));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { category, region } = getState();
    const { selectedId: categoryId } = category;
    const { selectedName: regionName } = region;

    if (!categoryId || !regionName) {
      return;
    }

    dispatch(updateRestaurantsLoading(true));

    const restaurants = await fetchRestaurants(regionName, categoryId);

    dispatch(setRestaurants(restaurants));

    dispatch(updateRestaurantsLoading(false));
  };
}
