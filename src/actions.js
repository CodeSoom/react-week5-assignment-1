import { fetchCategories } from './services/api';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    // dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
}
