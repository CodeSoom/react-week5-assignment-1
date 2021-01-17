import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function selectRegion(name) {
  return {
    type: 'selectRegion',
    payload: {
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

export function selectCategory(id) {
  return {
    type: 'selectCategory',
    payload: {
      id,
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

export function loadRestaurants() {
  return async (dispatch, getStore) => {
    const { selectedCategoryId, selectedRegionName } = getStore();

    if (!selectedCategoryId || !selectedRegionName) {
      return;
    }

    const restaurants = await fetchRestaurants(selectedCategoryId, selectedRegionName);
    dispatch(setRestaurants(restaurants));
  };
}
