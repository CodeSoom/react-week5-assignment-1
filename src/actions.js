import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function setRegions({ regions }) {
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
    dispatch(setRegions({ regions }));
  };
}

export function setSelectedRegion(name) {
  return {
    type: 'setSelectedRegion',
    payload: {
      name,
    },
  };
}

export function setSelectedCategoryId(id) {
  return {
    type: 'setSelectedCategoryId',
    payload: {
      id,
    },
  };
}

export function setCategories({ categories }) {
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
    dispatch(setCategories({ categories }));
  };
}

export function setRestaurants({ restaurants }) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants({ selectedRegion, selectedCategoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ selectedRegion, selectedCategoryId });
    dispatch(setRestaurants({ restaurants }));
  };
}
