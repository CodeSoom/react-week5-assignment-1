import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
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

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
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

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();
    dispatch(setRestaurants(restaurants));
  };
}
