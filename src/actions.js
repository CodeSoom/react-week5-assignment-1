import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

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

export function loadRestaurants(region, category) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region.name, category.id);
    dispatch(setRestaurants(restaurants));
  };
}

export function setSelectedRegion(region) {
  return {
    type: 'setSelectedRegion',
    payload: {
      region,
    },
  };
}

export function setSelectedCategory(category) {
  return {
    type: 'setSelectedCategory',
    payload: {
      category,
    },
  };
}
