import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
  fetchRestaurants,
} from './services/api';

export const SET_REGIONS = 'SET_REGIONS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

export const setRestaurantRegions = (value) => ({
  type: SET_REGIONS,
  payload: value,
});

export const setRestaurantCategories = (value) => ({
  type: SET_CATEGORIES,
  payload: value,
});

export const setRestaurants = (value) => ({
  type: SET_RESTAURANTS,
  payload: value,
});

export const loadRestaurantRegions = () => async (dispatch) => {
  const regions = await fetchRestaurantRegion();

  dispatch(setRestaurantRegions(regions));
};

export const loadRestaurantCategories = () => async (dispatch) => {
  const categories = await fetchRestaurantCategories();

  dispatch(setRestaurantCategories(categories));
};

export const loadRestaurnats = () => async (dispatch, getState) => {
  const { selectedRegion, selectedCategory } = getState();

  if (!selectedRegion.name || !selectedCategory.id) {
    return;
  }

  const restaurants = await fetchRestaurants({
    regionName: selectedRegion.name,
    categoryId: selectedCategory.id,
  });

  dispatch(setRestaurants(restaurants));
};

export const setRestaurantRegion = (value) => ({
  type: SET_SELECTED_REGION,
  payload: value,
});

export const setRestaurantCategory = (value) => ({
  type: SET_SELECTED_CATEGORY,
  payload: value,
});
