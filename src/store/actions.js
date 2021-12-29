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

export const changeCategory = (categoryId) => ({
  type: CHANGE_CATEGORY,
  payload: {
    categoryId,
  },
});

export const setRegions = (regions) => ({
  type: SET_REGIONS,
  payload: {
    regions,
  },
});

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: {
    categories,
  },
});

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
