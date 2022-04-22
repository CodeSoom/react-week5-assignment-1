import { fetchCategories } from './services/api';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function selectCategory(selectedCategoryID) {
  return {
    type: 'selectCategory',
    payload: {
      selectedCategoryID,
    },
  };
}
