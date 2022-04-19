import { fetchCategories } from '../services/api';

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

export const setCategories = ({ categories }) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories({ categories }));
  };
}

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = [];

    dispatch(setRestaurants({ restaurants }));
  };
}
