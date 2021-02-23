import { fetchRegions, fetchCategories } from './services/api';

export function changeSelectedRegion(id) {
  return (
    {
      type: 'changeSelectedRegion',
      payload: { id },
    }
  );
}

export function changeSelectedCategory(id) {
  return (
    {
      type: 'changeSelectedCategory',
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

export function setCategories(categories) {
  return (
    {
      type: 'setCategories',
      payload: { categories },
    }
  );
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}
