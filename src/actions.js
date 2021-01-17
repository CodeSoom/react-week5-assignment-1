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

export function selectCategory({ id }) {
  return {
    type: 'selectCategory',
    payload: { id },
  };
}

export function selectRegion({ name, id }) {
  return {
    type: 'selectRegion',
    payload: { name, id },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadRestaurants({ categoryId, regionName, stopFetch }) {
  return async (dispatch) => {
    if (categoryId && regionName && stopFetch) {
      const restaurants = await fetchRestaurants({ categoryId, regionName });

      dispatch(setRestaurants(restaurants));
    }
  };
}
