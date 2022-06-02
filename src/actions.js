import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

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
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function chooseRegion(region) {
  return {
    type: 'chooseRegion',
    payload: {
      region,
    },
  };
}

export function chooseCategory(category) {
  return {
    type: 'chooseCategory',
    payload: {
      category,
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

export function loadRestaurants(region, category) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, category);

    dispatch(setRestaurants(restaurants));
  };
}
