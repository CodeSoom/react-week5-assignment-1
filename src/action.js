import { fetchCategories, fetchRegions, fetchRestaurants } from './service/api';

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

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: {
      regionId,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
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

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    const categories = await fetchCategories();

    dispatch(setRegions(regions));

    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegion, selectedCategory } = getState();

    if (!selectedRegion || !selectedCategory) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: selectedRegion.name,
      categoryId: selectedCategory.id,
    });

    dispatch(setRestaurants(restaurants));
  };
}
