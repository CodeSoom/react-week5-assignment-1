import {
  fetchRestaurantRegion,
  fetchRestaurantCategories,
} from './services/api';

export const SET_REGIONS = 'SET_REGIONS';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const loadRestaurantRegion = () => async (dispatch) => {
  const data = await fetchRestaurantRegion();

  dispatch({ type: SET_REGIONS, payload: data });
};

export const loadRestaurantCategories = () => async (dispatch) => {
  const data = await fetchRestaurantCategories();

  dispatch({ type: SET_CATEGORIES, payload: data });
};
