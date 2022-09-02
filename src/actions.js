import { fetchCategories } from './services/api';

export function selectRegion(selectedRegion) {
  return {
    type: 'selectRegion',
    payload: {
      selectedRegion,
    },
  };
}

export function selectCategory(selectedCategory) {
  return {
    type: 'selectCategory',
    payload: {
      selectedCategory,
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

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}