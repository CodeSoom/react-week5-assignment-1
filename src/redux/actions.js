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

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const regions = await fetchCategories();

    dispatch(setCategories(regions));
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
