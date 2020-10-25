import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function getRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function getCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function selectCategory(category) {
  return {
    type: 'selectCategory',
    payload: { category },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function getRestaurants() {
  return async (dispatch, getState) => {
    const { selected } = getState();

    if (selected.region === '') {
      return;
    }

    if (selected.category === '') {
      return;
    }

    const restaurants = await fetchRestaurants(selected.region, selected.category);

    dispatch(setRestaurants(restaurants));
  };
}
