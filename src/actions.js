import {
  fetchRestaurantRegions,
  fetchRestaurantCategories,
} from '../services/api';

export function checkRegion(id) {
  return {
    type: 'checkRegion',
    payload: {
      id,
    },
  };
}

export function checkCategory(id) {
  return {
    type: 'checkCategory',
    payload: {
      id,
    },
  };
}

export function setRestaurantRegions(regions) {
  return {
    type: 'setRestaurantRegions',
    payload: {
      regions,
    },
  };
}

export function loadRestaurantRegions() {
  return async (dispatch) => {
    const regions = await fetchRestaurantRegions();
    dispatch(setRestaurantRegions(regions));
  };
}

export function setRestaurantCategories(categories) {
  return {
    type: 'setRestaurantCategories',
    payload: {
      categories,
    },
  };
}

export function loadRestaurantCategories() {
  return async (dispatch) => {
    const categories = await fetchRestaurantCategories();
    dispatch(setRestaurantCategories(categories));
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
