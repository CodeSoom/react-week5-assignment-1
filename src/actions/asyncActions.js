import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from '../services/api';

import {
  setCategories, updateCategoriesLoading,
} from './categoryActions';

import {
  setRegions, updateRegionsLoading,
} from './regionActions';

import {
  updateRestaurantsLoading,
  setRestaurants,
} from './restaurantActions';

export function loadCategories() {
  return async (dispatch) => {
    dispatch(updateCategoriesLoading(true));

    const categories = await fetchCategories();
    dispatch(setCategories(categories));

    return dispatch(updateCategoriesLoading(false));
  };
}

export function searchRestaurants() {
  return async (dispatch, getState) => {
    const { category, region } = getState();
    const { selectedId: categoryId } = category;
    const { selectedName: regionName } = region;

    if (!categoryId || !regionName) {
      return;
    }

    dispatch(updateRestaurantsLoading(true));

    const restaurants = await fetchRestaurants(regionName, categoryId);

    dispatch(setRestaurants(restaurants));

    dispatch(updateRestaurantsLoading(false));
  };
}

// 할 일: loadRestaurants, loadCategories, loadRegions 를 만든다
// 각 함수에서 로딩까지 함께 관리 할 수 있도록 한다.
