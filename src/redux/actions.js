import { fetchCategories, fetchRegions } from '../services/api';

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

export function updateLoading(loading) {
  return {
    type: 'updateLoading',
    payload: {
      loading,
    },
  };
}

export function loadInitialState() {
  return async (dispatch) => {
    dispatch(updateLoading(true));

    await Promise.all([
      fetchCategories(),
      fetchRegions(),
    ])
      .then(([categories, regions]) => {
        dispatch(setCategories(categories));
        dispatch(setRegions(regions));
        dispatch(updateLoading(false));
      });
  };
}

export function selectRegion(regionName) {
  return {
    type: 'selectRegion',
    payload: {
      regionName,
    },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: {
      categoryId,
    },
  };
}
