import {
  fetchRegions,
  fetchCategories,
} from './services/api';

export function setRegions(regions) {
  return ({
    type: 'setRegions',
    payload: {
      regions,
    },
  });
}

export function setCategories(categories) {
  return ({
    type: 'setCategories',
    payload: {
      categories,
    },
  });
}

export function selectCategory(id) {
  return ({
    type: 'selectCategory',
    payload: {
      id,
    },
  });
}

export function selectRegion(id, name) {
  return ({
    type: 'selectRegion',
    payload: {
      id,
      name,
    },
  });
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
