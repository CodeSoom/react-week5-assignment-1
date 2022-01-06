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

export function selectRegion(regionId) {
  return {
    type: 'selectRegion',
    payload: { regionId },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: { categoryId },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    // call api for getting regions
    const regions = await fetchRegions();
    // call api for getting categories
    const categories = await fetchCategories();

    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const {
      selectedRegion: region,
      selectedCategory: category,
    } = getState();

    if (!region || !category) {
      return;
    }

    const restaurants = await fetchRestaurants({
      regionName: region.name,
      categoryId: category.id,
    });

    dispatch(setRestaurants(restaurants));
  };
}
