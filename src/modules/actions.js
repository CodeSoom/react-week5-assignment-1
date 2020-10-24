import { fetchRegions } from '../services/api';

export function updateRegion(region) {
  return {
    type: 'updateRegion',
    payload: { region },
  };
}

export function updateCategory(category) {
  return {
    type: 'updateCategory',
    payload: { category },
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
