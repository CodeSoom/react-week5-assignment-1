import { fetchRegions } from '../services/api';

export function updateRegion(region) {
  return {
    type: 'updateRegion',
    payload: { region },
  };
}

function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}
