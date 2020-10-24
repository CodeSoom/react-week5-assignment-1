import {
  fetchRegions,
  fetchCategories,
} from './services/api';

// Action creators
/*
 * RegionsContainer
 */
export function setRegions(categories) {
  return {
    type: 'setRegions',
    payload: {
      categories,
    },
  };
}

export function selectRegion(id) {
  return {
    type: 'selectRegion',
    payload: {
      id,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const categories = await fetchRegions();
    dispatch(setRegions(categories));
  };
}

/*
 * CategoriesContainer
 */
export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function selectCategory(id) {
  return {
    type: 'selectCategory',
    payload: {
      id,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
