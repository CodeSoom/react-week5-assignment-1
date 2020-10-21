import { fetchRegions } from '../services/api';

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

export function updateLoading(loading) {
  return {
    type: 'updateLoading',
    payload: {
      loading,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    dispatch(updateLoading(true));
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
    dispatch(updateLoading(false));
  };
}
