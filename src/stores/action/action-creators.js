import {
  SET_CATEGORIES, SET_CURRENT_CATEGORY_ID, UPDATE_RESTAURANT_PROPERTY, ADD_RESTAURANT,
} from './action-types';

import { fetchCategories } from '../../services/api';

export function setCurrentCategoryId(categoryId) {
  return {
    type: SET_CURRENT_CATEGORY_ID,
    payload: { categoryId },
  };
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function updateRestaurantProperty(propertyName, propertyValue) {
  return {
    type: UPDATE_RESTAURANT_PROPERTY,
    payload: { propertyName, propertyValue },
  };
}

export function addRestaurant() {
  return {
    type: ADD_RESTAURANT,
  };
}
