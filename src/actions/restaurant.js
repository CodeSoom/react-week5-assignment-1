import { fetchRestaurantCategories, fetchRestaurantRegions } from '../api/restaurant';

export const TYPES = {
  SET_REGIONS: 'SET_REGIONS',
  SET_CATEGORIES: 'SET_CATEGORIES',
};

export function setRegions(regions) {
  return {
    type: TYPES.SET_REGIONS,
    payload: { regions },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRestaurantRegions();

    dispatch(setRegions(regions));
  };
}

export function setCategories(categories) {
  return {
    type: TYPES.SET_CATEGORIES,
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchRestaurantCategories();

    dispatch(setCategories(categories));
  };
}
