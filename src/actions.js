import { fetchCategories } from './services/api';

export function setSelectedRegion(name) {
  return {
    type: 'setSelectedRegion',
    payload: { name },
  };
}

export function setSelectedCategory(name) {
  return {
    type: 'setSelectedCategory',
    payload: { name },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
