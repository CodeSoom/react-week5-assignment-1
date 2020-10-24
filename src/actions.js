import { fetchRegions } from './services/api';

// Action creators
/*
 * RegionsContainer
 */
export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function selectRegion(id) {
  return {
    type: 'selectRegion',
    payload: {
      id,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    // TODO
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

/*
 * CategoriesContainer
 */
export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function selectCategory(id) {
  return {
    type: 'selectCategory',
    payload: {
      id,
    },
  };
}
