import { getCategories, getRegions, getRestaurants } from '../services/api';

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

export function setCategory(category) {
  return {
    type: 'setCategory',
    payload: { category },
  };
}

export function setLocation(location) {
  return {
    type: 'setLocation',
    payload: { location },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
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

export function fetchRestaurants({ location, category }) {
  return async (dispatch) => {
    const regions = await getRestaurants(location.name, category.id);
    dispatch(setRestaurants(regions));
  };
}
