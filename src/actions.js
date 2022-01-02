import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadInitialData() {
  // 얻어와야 하는 부분
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

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}
