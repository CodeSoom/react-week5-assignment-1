import {
  fetchRegions,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
  };
}

export function loadDefaultData() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}
