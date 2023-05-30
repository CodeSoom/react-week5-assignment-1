import { fetchCategories } from '../../services/api';

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
};

export const checkCategory = (checkedCategoryId) => ({
  type: 'checkCategory',
  payload: {
    checkedCategoryId,
  },
});
