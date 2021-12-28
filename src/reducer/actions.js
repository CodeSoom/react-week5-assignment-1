import SearchService from '../services/api';

export function setCategories(locations) {
  return {
    type: 'setCategories',
    payload: { locations },
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    const categories = await SearchService.getCategories();
    dispatch(setCategories(categories));
  };
}
