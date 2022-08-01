import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function setRegion(region) {
  return {
    type: 'setRegion',
    payload: { region },
  };
}

export function setCategory(category) {
  return {
    type: 'setCategory',
    payload: { category },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setCategory',
    payload: { restaurants },
  };
}

export function getCategories(categories) {
  return {
    type: 'getCategories',
    payload: { categories },
  };
}

export function getRegions(regions) {
  return {
    type: 'getRegions',
    payload: { regions },
  };
}

export function getRestaurants(restaurants) {
  return {
    type: 'getRestaurants',
    payload: { restaurants },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(getCategories(categories));
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(getRegions(regions));
  };
}

export function loadRestaurants(region, category) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, category);
    dispatch(getRestaurants(restaurants));
  };
}
