import * as services from './services/api';

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});
export function loadCategories() {
  return async (dispatch) => {
    const response = await services.fetchCategories();
    dispatch(setCategories(response));
  };
}

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});
export function loadRegions() {
  return async (dispatch) => {
    const response = await services.fetchRegions();
    dispatch(setRegions(response));
  };
}

export function setCategoryId(categoryId) {
  return ({
    type: 'setCategoryId',
    payload: {
      categoryId,
    },
  });
}

export function setRegionName(regionName) {
  return ({
    type: 'setRegionName',
    payload: {
      regionName,
    },
  });
}
