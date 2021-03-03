import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function updateSelectedLocation(location) {
  return {
    type: 'updateSelectedLocation',
    payload: { location },
  };
}

export function updateSelectedCategory(category) {
  return {
    type: 'updateSelectedCategory',
    payload: { category },
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
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants(name, id) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(name, id);
    dispatch(setRestaurants(restaurants));
  };
}
