import { fetchRegions } from './services/api';

export function changeSelectedRegion(id) {
  return (
    {
      type: 'changeSelectedRegion',
      payload: { id },
    }
  );
}

export function setRegions(regions) {
  return (
    {
      type: 'setRegions',
      payload: { regions },
    }
  );
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}
