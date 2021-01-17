import _ from 'lodash';

import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
  };
}

export function selectCategory(category) {
  return {
    type: 'selectCategory',
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
  return async (dispatch, getState) => {
    const { selected } = getState();

    if (selected.region && selected.category) {
      dispatch(setRestaurants([{ id: 1, name: 'loading...' }]));

      _.debounce(async () => {
        const restaurants = await fetchRestaurants({
          regionId: selected.region,
          categoryId: selected.category,
        });

        dispatch(setRestaurants(restaurants));
      }, 1000)();
    }
  };
}
