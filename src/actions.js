import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export const changeRegion = (region) => ({
  type: 'changeRegion',
  payload: { region },
});

export const changeCategory = (category) => ({
  type: 'changeCategory',
  payload: { category },
});

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: { categories },
});

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: { regions },
});

export const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: { restaurants },
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
  const { region: regionName, categoryId } = getState();
  const restaurant = await fetchRestaurants({
    regionName,
    categoryId,
  });
  dispatch(setRestaurants(restaurant));
};
