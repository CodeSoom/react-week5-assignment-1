import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
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

export function setCurrentRegionId(currentRegionId) {
  return {
    type: 'setCurrentRegionId',
    payload: {
      currentRegionId,
    },
  };
}

export function setCurrentCategoryId(currentCategoryId) {
  return {
    type: 'setCurrentCategoryId',
    payload: {
      currentCategoryId,
    },
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

export function loadRegions() {
  return async (dispatch) => {
    const response = await fetchRegions();
    const regions = await response.json();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const response = await fetchCategories();
    const categories = await response.json();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { currentRegionId, currentCategoryId } = getState();
    const response = await fetchRestaurants(currentRegionId, currentCategoryId);
    const restaurants = await response.json();
    dispatch(setRestaurants(restaurants));
  };
}
