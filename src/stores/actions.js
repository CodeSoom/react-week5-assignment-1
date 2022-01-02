import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from '../services/api';

export function setCategory({ id, name }) {
  return {
    type: 'setCategory',
    payload: {
      id,
      name,
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

export function setRegion({ id, name }) {
  return {
    type: 'setRegion',
    payload: {
      id,
      name,
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

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadRestaurants(region, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, categoryId);
    dispatch(setRestaurants(restaurants));
  };
}
