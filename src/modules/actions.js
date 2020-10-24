import {
  fetchRegions,
  fetchCategories,
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
    payload: { regions: categories },
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
