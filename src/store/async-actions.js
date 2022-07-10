import {
  fetchRegions,
  fetchCategories,
} from '../services/api';

import {
  setRegions,
  setCategories,
} from './actions';

const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export {
  loadRegions,
  loadCategories,
};
