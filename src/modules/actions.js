import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function updateRegion(region) {
  return {
    type: 'updateRegion',
    payload: { region },
  };
}

export function updateCategory(category) {
  return {
    type: 'updateCategory',
    payload: { category },
  };
}

function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants();

    dispatch(setRestaurants(restaurants));
  };
}
