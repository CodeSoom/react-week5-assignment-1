import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
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

export function selectCategory(category) {
  return {
    type: 'selectCategory',
    payload: { category },
  };
}

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
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

export function loadRestaurants({ selectedRegion, selectedCategory }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(
      { selectedRegion, selectedCategory },
    );

    dispatch(setRestaurants(restaurants));
  };
}
