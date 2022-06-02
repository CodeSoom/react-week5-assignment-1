import { fetchCategories, fetchRegions } from './api';

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

export function setCurrentRegionId(currentRegionId) {
  return {
    type: 'setCurrentRegionId',
    payload: {
      currentRegionId,
    },
  };
}

export function setCurrentCategoryId(currentCategoryId) {
  return {
    type: 'setCurrentCategoryId',
    payload: {
      currentCategoryId,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const response = await fetchRegions();
    const regions = await response.json();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const response = await fetchCategories();
    const categories = await response.json();
    dispatch(setCategories(categories));
  };
}
