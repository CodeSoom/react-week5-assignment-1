import { fetchCategories, fetchRegions, fetchRestaurants } from '../services';
import { isNull } from '../lib';
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
    const { selected: { regionName, categoryId } } = getState();

    if (isNull(regionName) || isNull(categoryId)) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName,
      categoryId,
    });

    dispatch(setRestaurants(restaurants));
  };
}
