import {
  fetchCategories,
  fetchRegions,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();

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

export const setSelectedRegion = (name) => ({
  type: 'setSelectedRegion',
  payload: {
    name,
  },
});
