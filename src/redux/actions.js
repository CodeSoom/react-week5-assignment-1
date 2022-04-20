import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

export const addRestaurant = ({ name, category, address }) => ({
  type: 'addRestaurant',
  payload: {
    name,
    category,
    address,
  },
});

export const deleteRestaurant = ({ id }) => ({
  type: 'deleteRestaurant',
  payload: {
    id,
  },
});

export const setRestaurants = ({ restaurants }) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export const updateName = ({ name }) => ({
  type: 'updateName',
  payload: {
    name,
  },
});

export const updateCategory = ({ category }) => ({
  type: 'updateCategory',
  payload: {
    category,
  },
});

export const updateAddress = ({ address }) => ({
  type: 'updateAddress',
  payload: {
    address,
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
