import {
  fetchRestaurantCategories,
  fetchRestaurantRegions,
  fetchRestaurants,
} from '../api/restaurant';

export const TYPES = {
  SET_REGIONS: 'SET_REGIONS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_RESTAURANTS: 'SET_RESTAURANTS',
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

export function setRestaurants(restaurants) {
  return {
    type: TYPES.SET_RESTAURANTS,
    payload: { restaurants },
  };
}

export function loadRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ regionName, categoryId });

    dispatch(setRestaurants(restaurants));
  };
}
