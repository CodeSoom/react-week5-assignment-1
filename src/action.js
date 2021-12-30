import {
  fetchLoadLocations,
  fetchLoadCategories,
} from './services/api';

export function setLocation(location) {
  return {
    type: 'setLocation',
    payload: {
      location,
    },
  };
}

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: {
      locations,
    },
  };
}

export function loadLocations() {
  return async (dispatch) => {
    const loactions = await fetchLoadLocations();
    dispatch(setLocations(loactions));
  };
}

export function setCategory(category) {
  return {
    type: 'setCategory',
    payload: {
      category,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchLoadCategories();
    dispatch(setCategories(categories));
  };
}
