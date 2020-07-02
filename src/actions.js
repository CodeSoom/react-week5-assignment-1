import { fetchRegions } from './services/api';

export function setRegions({ regions }) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions({ regions }));
  };
}

export function setSelectedRegion(id) {
  return {
    type: 'setSelectedRegion',
    payload: {
      id,
    },
  };
}

export function setSelectedCategoryId(id) {
  return {
    type: 'setSelectedCategoryId',
    payload: {
      id,
    },
  };
}

export function setCategories({ categories }) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}
