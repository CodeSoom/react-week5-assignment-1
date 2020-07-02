import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

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

export const setRestaurants = (restaurant) => ({
  type: 'setRestaurants',
  payload: restaurant,
});

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export const loadRestaurants = () => async (dispatch, getState) => {
  const restaurant = await fetchRestaurants({
    regionName: getState.region,
    categoryId: getState.categoryId,
  });
  dispatch(setRestaurants(restaurant));
};
