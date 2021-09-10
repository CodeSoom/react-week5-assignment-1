import {
  fetchPlaces,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function setPlaces(places) {
  return {
    type: 'setPlaces',
    payload: {
      places,
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

export function clickPlace(name) {
  return {
    type: 'clickPlace',
    payload: {
      name,
    },
  };
}

export function clickCategory(id) {
  return {
    type: 'clickCategory',
    payload: {
      id,
    },
  };
}

export function loadPlaces() {
  return async (dispatch) => {
    const places = await fetchPlaces();

    dispatch(setPlaces(places));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, matchedRestaurants) => {
    const { clickedCategory, clickedPlace } = matchedRestaurants();

    const restaurants = await fetchRestaurants({ clickedPlace, clickedCategory });

    dispatch(setRestaurants(restaurants));
  };
}
