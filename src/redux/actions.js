import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

export const setRestaurants = ({ restaurants }) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export const setCategories = ({ categories }) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const setRegions = ({ regions }) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const updateRegionName = ({ regionName }) => ({
  type: 'updateRegionName',
  payload: {
    regionName,
  },
});

export const updateCategoryId = ({ categoryId }) => ({
  type: 'updateCategoryId',
  payload: {
    categoryId,
  },
});

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions({ regions }));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories({ categories }));
  };
}

export function loadRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ regionName, categoryId });

    dispatch(setRestaurants({ restaurants }));
  };
}
