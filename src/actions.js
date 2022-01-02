import {
  fetchRegions,
  fetchCategories,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadInitialData() {
  // 얻어와야 하는 부분
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

// TODO: delete this!
export function xxx() {
  return {};
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}
