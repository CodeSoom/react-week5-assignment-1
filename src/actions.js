import { fetchCategories } from './services/api';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
};
