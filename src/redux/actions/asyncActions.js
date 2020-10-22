import {
  fetchCategories,
  fetchRegions,
} from '../../services/api';

import {
  updateCategoriesLoading,
  setCategories,
} from './categoryActions';

import {
  updateRegionsLoading,
  setRegions,
} from './regionActions';

export function loadInitialState() {
  return async (dispatch) => {
    dispatch(updateCategoriesLoading(true));
    dispatch(updateRegionsLoading(true));

    const [categories, regions] = await Promise.all([
      fetchCategories(),
      fetchRegions(),
    ]);

    dispatch(setCategories(categories));
    dispatch(setRegions(regions));

    dispatch(updateCategoriesLoading(false));
    dispatch(updateRegionsLoading(false));
  };
}

// TODO: delete this
export function xx() {

}
