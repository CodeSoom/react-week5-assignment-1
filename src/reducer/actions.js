import { getCategories } from '../services/api';

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: { locations },
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    const categories = await getCategories();
    dispatch(setLocations(categories));
  };
}
