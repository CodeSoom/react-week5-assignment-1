import * as services from './services/api';

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});
export function loadCategories() {
  return async (dispatch) => {
    const response = await services.fetchCategories();
    dispatch(setCategories(response));
  };
}
