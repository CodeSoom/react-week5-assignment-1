import { fetchInitRegions } from './services/api';

export function setInitRegions(initRegions) {
  return {
    type: 'setInitRegions',
    payload: {
      regions: initRegions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchInitRegions();
    dispatch(setInitRegions(regions));
  };
}

export function selectRegion(selectedRegion) {
  return {
    type: 'selectRegion',
    payload: {
      selectedRegion,
    },
  };
}
