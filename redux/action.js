import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function setRegions(regions) {
  return { type: 'setRegions', payload: { regions } };
}

export function setCategories(categories) {
  return { type: 'setCategories', payload: { categories } };
}

export function setRestaurants(restaurants) {
  return { type: 'setRestaurants', payload: { restaurants } };
}

export function changeRegion(regionId) {
  return { type: 'changeRegion', payload: { regionId } };
}

export function changeCategory(categoryId) {
  return { type: 'changeCategory', payload: { categoryId } };
}

export function loadInitial() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectedRegion, selectedCategory } = getState();

    if (selectedRegion.name && selectedCategory.id) {
      const restaurants = await fetchRestaurants({
        regionName: selectedRegion.name,
        categoryId: selectedCategory.id,
      });
      dispatch(setRestaurants(restaurants));
    }
  };
}
