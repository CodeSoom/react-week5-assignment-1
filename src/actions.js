import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
} from './services/api';

export const SET_REGIONS = 'SET_REGIONS';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_REGION = 'SET_REGION';

export const loadRestaurantRegions = () => async (dispatch) => {
  const data = await fetchRestaurantRegion();

  dispatch({ type: SET_REGIONS, payload: data });
};

export const loadRestaurantCategories = () => async (dispatch) => {
  const data = await fetchRestaurantCategories();

  dispatch({ type: SET_CATEGORIES, payload: data });
};

export const setRestaurantRegion = (value) => ({
  type: SET_REGION,
  payload: value,
});
