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

let debounce;

export function loadRestaurants() {
  return async (dispatch, getState) => {
    dispatch(setRestaurants([]));

    const { selected } = getState();

    if (selected.region && selected.category) {
      clearTimeout(debounce);

      debounce = setTimeout(async () => {
        const restaurants = await fetchRestaurants({
          regionId: selected.region,
          categoryId: selected.category,
        });

        dispatch(setRestaurants(restaurants));
      }, 1000);
    }
  };
}
