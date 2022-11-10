import { fetchRegions, fetchCategories } from './services/api';

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};
