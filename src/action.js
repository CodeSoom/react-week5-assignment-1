import { fetchRegionList } from './services/api';

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
    // TODO : fetch
    const categories = [];
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
