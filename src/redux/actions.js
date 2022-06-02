import { fetchRegions } from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setErrorMessage(error) {
  return {
    type: 'setErrorMessage',
    payload: {
      error,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    try {
      const regions = await fetchRegions();

      dispatch(setRegions(regions));
    } catch (error) {
      dispatch(setErrorMessage(error));
    }
  };
}
