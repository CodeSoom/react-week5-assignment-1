import { setCategories, setRegions } from './actions';

import { fetchCategories, fetchRegions } from '../services/api';

export function getRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function getCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}
