import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

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

export function regionSelect(regionName) {
  return {
    type: 'regionSelect',
    payload: {
      regionName,
    },
  };
}

export function categorySelect(id) {
  return {
    type: 'categorySelect',
    payload: {
      categoryId: id,
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

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(regionName, categoryId);
    dispatch(setRestaurants(restaurants));
  };
}
