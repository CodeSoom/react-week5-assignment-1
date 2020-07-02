import { fetchRegions, fetchCategories } from './services/api';

export const changeRegion = ({ name }) => ({
  type: 'changeRegion',
  payload: {
    name,
  },
});

export const changeCategory = ({ name }) => ({
  type: 'changeCategory',
  payload: {
    name,
  },
});

export const setCategories = (categoreis) => ({
  type: 'setCategories',
  payload: categoreis,
});

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: regions,
});

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};
