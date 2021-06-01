import {
  fetchRegionNames,
  fetchCategories,
} from '../services/api';

export function setRegionNames(regionNames) {
  return {
    type: 'setRegionNames',
    payload: { regionNames },
  };
}

export function loadRegionNames() {
  return async (dispatch) => {
    const RegionNames = await fetchRegionNames();

    dispatch(setRegionNames(RegionNames));
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const Categories = await fetchCategories();

    dispatch(setCategories(Categories));
  };
}
