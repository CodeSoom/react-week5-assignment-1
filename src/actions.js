import { fetchRegions } from './services/api';

export function setRegion(region) {
  const { name } = region;

  return {
    type: 'setRegion',
    payload: {
      regionName: name,
    },
  };
}

export function setCategory(category) {
  const { id } = category;

  return {
    type: 'setCategory',
    payload: {
      categoryId: id,
    },
  };
}

function setRegions(regions) {
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
    dispatch(setRegions(regions));
  };
}
