import { fetchRegions } from './services/api';

// Action creators
export function selectRegion(id) {
  return {
    type: 'selectRegion',
    payload: {
      id,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    // TODO
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}
