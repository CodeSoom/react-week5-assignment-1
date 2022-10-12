import { fetchCategories } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
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

export function setSelectRegionId(selectRegionId) {
  return {
    type: 'setSelectRegionId',
    payload: {
      selectRegionId,
    },
  };
}

export function setSelectCategoryId(selectCategoryId) {
  return {
    type: 'setSelectCategoryId',
    payload: {
      selectCategoryId,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
