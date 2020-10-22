import { fetchCategories, fetchRegions } from '../services/api';

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

export function updateRestaurantsLoading(loading) {
  return {
    type: 'updateRestaurantsLoading',
    payload: {
      loading,
    },
  };
}

export function updateCategoriesLoading(loading) {
  return {
    type: 'updateCategoriesLoading',
    payload: {
      loading,
    },
  };
}

export function updateRegionsLoading(loading) {
  return {
    type: 'updateRegionsLoading',
    payload: {
      loading,
    },
  };
}

export function loadInitialState() {
  return async (dispatch) => {
    dispatch(updateCategoriesLoading(true));
    dispatch(updateRegionsLoading(true));

    const [categories, regions] = await Promise.all([
      fetchCategories(),
      fetchRegions(),
    ]);

    dispatch(setCategories(categories));
    dispatch(setRegions(regions));

    dispatch(updateCategoriesLoading(false));
    dispatch(updateRegionsLoading(false));
  };
}

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: {
      regionId,
    },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: {
      categoryId,
    },
  };
}
