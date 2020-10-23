import {
  updateCategoriesLoading,
} from './categoryActions';

import {
  updateRegionsLoading,
} from './regionActions';

export function updateInitialLoading(loading) {
  return (dispatch) => {
    dispatch(updateCategoriesLoading(loading));
    dispatch(updateRegionsLoading(loading));
  };
}

export function xx() {

}
