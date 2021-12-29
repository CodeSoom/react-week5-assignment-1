import { fetchCategories } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setCategories',
    payload: {
      regions,
    },
  };
}

export const loadRegions = () => async (dispatch) => {
  const regions = [];

  dispatch(setRegions(regions));
};

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
};
