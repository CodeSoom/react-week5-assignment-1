import { fetchCategories, fetchRegions, fetchRestaurants } from '../services';
import { isNil } from '../lib';
import { setCategories, setRegions, setRestaurants } from './actions';

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

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selected } = getState();
    const { regionName, categoryId } = selected || {};

    if (isNil(regionName) || isNil(categoryId)) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName,
      categoryId,
    });

    dispatch(setRestaurants(restaurants));
  };
}
