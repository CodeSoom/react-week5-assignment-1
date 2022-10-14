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

export function loadStores() {
  return async (dispatch) => {
    const stores = await fetchStores();
    dispatch(setStores(stores));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const stores = await fetchRegions();
    console.log(stores);
    dispatch(setRegions(stores));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    console.log(categories);
    dispatch(setCategories(categories));
  };
}
