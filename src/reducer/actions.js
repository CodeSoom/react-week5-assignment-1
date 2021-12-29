import { getCategories, getRegions } from '../services/api';

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: { locations },
  };
}

export function setCategories(category) {
  return {
    type: 'setCategory',
    payload: { category },
  };
}

export function fetchCategories() {
  return async (dispatch) => {
    const categories = await getCategories();
    dispatch(setCategories(categories));
  };
}

export function fetchLocations() {
  return async (dispatch) => {
    const regions = await getRegions();
    dispatch(setLocations(regions));
  };
}
