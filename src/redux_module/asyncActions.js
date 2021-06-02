import { setCategories, setRegions } from './groupsSlice';
import { fetchRegions, fetchCategories } from '../servies/api';

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}
