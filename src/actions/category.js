import { fetchCategories } from '../services/category';

/**
 * Action Types
 */
export const SET_CATEGORIES = Symbol('setCategories');
export const SET_CURRENT_CATEGORY_ID = Symbol('setCurrentCategoryId');

/**
 * Actions
 */
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
