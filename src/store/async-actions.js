import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

import {
  setRegions,
  setCategories,
  setRestaurants,
} from './actions';

const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

const loadRestaurants = () => async (dispatch, getState) => {
  const { selectedRegion, selectedCategoryId } = getState();

  const restaurants = await fetchRestaurants(selectedRegion.name, selectedCategoryId);
  dispatch(setRestaurants(restaurants));
};

export {
  loadRegions,
  loadCategories,
  loadRestaurants,
};
