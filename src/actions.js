import {
  fetchLocations,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: {
      locations,
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

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function selectLocation({ id }) {
  return {
    type: 'selectLocation',
    payload: {
      id,
    },
  };
}

export function selectCategory({ id }) {
  return {
    type: 'selectCategory',
    payload: {
      id,
    },
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

export function loadRestaurants({ locationName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ regionName: locationName, categoryId });

    dispatch(setRestaurants(restaurants));
  };
}
