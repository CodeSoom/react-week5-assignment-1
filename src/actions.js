import {
  fetchLocations,
  fetchCategories,
} from './services/api';

export function updateSelectedLocation(selectedlocationname) {
  return {
    type: 'updateSelectedLocation',
    payload: { selectedlocationname },
  };
}

export function updateSelectedCategory(selectedcategoryname) {
  return {
    type: 'updateSelectedCategory',
    payload: { selectedcategoryname },
  };
}

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: { locations },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadLocations() {
  return async (dispatch) => {
    const locations = await fetchLocations();
    dispatch(setLocations(locations));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setLocations(categories));
  };
}
