import { fetchRegions } from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setErrorMessage(errorMessage) {
  return {
    type: 'setErrorMessage',
    payload: {
      errorMessage: `${errorMessage} 잠시 후 다시 시도해주세요`,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    try {
      const regions = await fetchRegions();

      dispatch(setRegions(regions));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
}
