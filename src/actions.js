import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function selectCategory({ selectCategoryId }) {
  return {
    type: 'selectCategory',
    payload: {
      selectCategoryId,
    },
  };
}

export function selectRegion({ selectRegionId }) {
  return {
    type: 'selectRegion',
    payload: {
      selectRegionId,
    },
  };
}

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

export function loadRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    if (!regionName || !categoryId) {
      return;
    }

    const restaurants = await fetchRestaurants({ regionName, categoryId });

    dispatch(setRestaurants({ restaurants }));
  };
}
