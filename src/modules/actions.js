import {
  fetchRegions,
  fetchCategories,
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
