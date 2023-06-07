import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export function setRegions(regions) {
  return {
    type: 'SET_REGIONS',
    payload: regions,
  };
}

export function loadRegions() {
  return (async (dispatch) => {
    const regions = await fetchRegions();
    await dispatch(setRegions(regions));
  });
}

export function setCategories(categories) {
  return {
    type: 'SET_CATEGORIES',
    payload: categories,
  };
}

export function loadCategories() {
  return (
    async (dispatch) => {
      const categories = await fetchCategories();
      await dispatch(setCategories(categories));
    }
  );
}

export function setRestaurants(restaurants) {
  return {
    type: 'SET_RESTAURANTS',
    payload: restaurants,
  };
}

export function setSelectedRegionAndCategory(selectedRegionAndCategory) {
  return {
    type: 'SET_SELECTED_REGION_AND_CATEGORY',
    payload: { selectedRegionAndCategory },
  };
}

export function loadRestaurants(selectedRegion = '', selectedCategory = '') {
  return (
    async (dispatch) => {
      const restaurants = await fetchRestaurants(
        selectedRegion.name,
        selectedCategory.id,
      );
      await dispatch(setRestaurants(restaurants));
    }
  );
}
