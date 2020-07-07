import { fetchCategories } from '../services/api';

/**
 * Action Types
 */
export const SET_CATEGORIES = Symbol('setCategories');
export const SET_SELECTED_CATEGORY_ID = Symbol('setSelectedCategoryId');

/**
 * Actions
 */
export function setSelectedCategoryId(selectedCategoryId) {
  return {
    type: SET_SELECTED_CATEGORY_ID,
    payload: { selectedCategoryId },
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
