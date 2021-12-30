// import categories from './fixtures/cetegories';
// import regions from './fixtures/regions';

import { fetchCategories, fetchRegions } from './services/api';

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

function setCategories(categories) {
  return {
    type: 'loadCategories',
    payload: {
      categories,
    },
  };
}
function setRegions(regions) {
  return {
    type: 'loadRegions',
    payload: {
      regions,
    },
  };
}

export function checkCategory(id) {
  return {
    type: 'checkCategory',
    payload: {
      checkedCategory: id,
    },
  };
}

export function checkRegion(id) {
  return {
    type: 'checkRegion',
    payload: {
      checkedRegion: id,
    },
  };
}
