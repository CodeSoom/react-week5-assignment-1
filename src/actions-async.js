import { getCategories, getRegions } from './actions';

import { fetchCategories, fetchRegions } from './services/api';

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(getRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(getCategories(categories));
  };
}
