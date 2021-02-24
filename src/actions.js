import { fetchCategories, fetchRegions } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function clickCategory(id) {
  return {
    type: 'clickCategory',
    payload: {
      id,
    },
  };
}

export function clickRegion(id) {
  return {
    type: 'clickRegion',
    payload: {
      id,
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
