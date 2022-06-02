import { fetchRegions } from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategoires(categories) {
  return {
    type: 'setCategoires',
    payload: {
      categories,
    },
  };
}

export function setErrorMessage(errorMessage) {
  return {
    type: 'setErrorMessage',
    payload: {
      errorMessage: errorMessage ? `${errorMessage} 잠시 후 다시 시도해주세요` : null,
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

export function loadCategories() {
  return async (dispatch) => {
    try {
      const categories = [{ id: 0, name: '한식' }, { id: 1, name: '중식' }];

      dispatch(setCategoires(categories));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
}
