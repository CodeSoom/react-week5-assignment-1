import {
  fetchRegions,
  fetchCategories,
} from './services/api';

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

export function selecteRegion(region) {
  return {
    type: 'selecteRegion',
    payload: { region },
  };
}

export function selecteCategory(category) {
  return {
    type: 'selecteCategory',
    payload: { category },
  };
}

export function getRestaurants(restaurants) {
  return {
    type: 'getRestaurants',
    payload: { restaurants },
  };
}

export function loadDate() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
