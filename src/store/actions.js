import { fetchCategories, fetchRegions } from '../services';

export const CHANGE_REGION = 'changeRegion';
export const CHANGE_CATEGORY = 'changeCategory';
export const SET_REGIONS = 'setRegions';
export const SET_CATEGORIES = 'setCategories';

export function changeRegion(regionName) {
  return {
    type: CHANGE_REGION,
    payload: {
      regionName,
    },
  };
}

export function changeCategory(categoryId) {
  return {
    type: CHANGE_CATEGORY,
    payload: {
      categoryId,
    },
  };
}

export function setRegions(regions) {
  return {
    type: SET_REGIONS,
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: {
      categories,
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
