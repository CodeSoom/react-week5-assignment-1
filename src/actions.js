import {
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function setRegion(currentRegion) {
  return {
    type: 'setRegion',
    payload: {
      currentRegion,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = [];

    dispatch(setRegions(regions));
  };
}

export function setCategory(currentCategory) {
  return {
    type: 'setCategory',
    payload: {
      currentCategory,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(regionName, categoryId);

    dispatch(setRestaurants(restaurants));
  };
}
