import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
} from './services/api';

export const SET_REGIONS = 'SET_REGIONS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_SELECTED_REGION = 'SET_SELECTED_REGION';
export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

export const loadRestaurantRegions = () => async (dispatch) => {
  const data = await fetchRestaurantRegion();

  dispatch({ type: SET_REGIONS, payload: data });
};

export const loadRestaurantCategories = () => async (dispatch) => {
  const data = await fetchRestaurantCategories();

  dispatch({ type: SET_CATEGORIES, payload: data });
};

export const setRestaurantRegion = (value) => ({
  type: SET_SELECTED_REGION,
  payload: value,
});

export const setRestaurantCategory = (value) => ({
  type: SET_SELECTED_CATEGORY,
  payload: value,
});
