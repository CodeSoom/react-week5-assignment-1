import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function checkedCategory({ id }) {
  return {
    type: 'checkedCategory',
    payload: { id },
  };
}

export function checkedRegion({ name }) {
  return {
    type: 'checkedRegion',
    payload: { name },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadRestaurants(categoryId, regionName) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(categoryId, regionName);

    dispatch(setRestaurants(restaurants));
  };
}

export function stopLoadRestaurants() {
  return {
    type: 'stopLoadRestaurants',
  };
}
