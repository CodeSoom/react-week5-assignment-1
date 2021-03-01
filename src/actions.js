import { fetchRestaurants } from './services/api';

export function setRegion(currentRegion) {
  return {
    type: 'setRegion',
    payload: {
      currentRegion,
    },
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
    const categories = [];

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

export function loadRestaurants(region, category) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, category);

    dispatch(setRestaurants(restaurants));
  };
}
