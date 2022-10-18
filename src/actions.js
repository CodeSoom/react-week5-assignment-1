// import { fetchCategories } from './services/api';

import { fetchCategories, fetchRegions, fetchStores } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}
export function setRegion(selectedRegion) {
  return {
    type: 'setRegion',
    payload: {
      selectedRegion,
    },
  };
}

export function setId(selectedId) {
  return {
    type: 'setId',
    payload: {
      selectedId,
    },
  };
}

export function setStores(stores) {
  return {
    type: 'setStores',
    payload: {
      stores,
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

export function loadStores(region, category) {
  return async (dispatch) => {
    const stores = await fetchStores(region, category);
    dispatch(setStores(stores));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const stores = await fetchRegions();
    dispatch(setRegions(stores));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
