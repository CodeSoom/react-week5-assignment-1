import { fetchRegions, fetchCategoies } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    const categories = await fetchCategoies();
    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
}

export function selectedRegion(regionId) {
  return ({
    type: 'selectedRegion',
    payload: { regionId },
  });
}
