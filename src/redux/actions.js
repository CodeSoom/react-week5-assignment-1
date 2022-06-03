import { fetchRegions, fetchCategories } from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
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

export function setErrorMessage(errorMessage) {
  // TODO: error 메세지 항목별로 나누기
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
      const categories = await fetchCategories();

      dispatch(setCategories(categories));
    } catch (error) {
      dispatch(setErrorMessage(error.message));
    }
  };
}
