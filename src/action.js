import {
  fetchRegionList,
  fetchCategories,
} from './services/api';

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function setRegionList(regionList) {
  return {
    type: 'setRegionList',
    payload: {
      regionList,
    },
  };
}

export function selectRegion({ id }) {
  return {
    type: 'selectRegion',
    payload: {
      id,
    },
  };
}

export function loadRegionList() {
  return async (dispatch) => {
    const regionList = await fetchRegionList();
    dispatch(setRegionList(regionList));
  };
}
