import { fetchRestaurantRegion } from './services/api';

export const loadRestaurantRegion = () => async (dispatch) => {
  const data = await fetchRestaurantRegion();

  dispatch({ type: 'SET_REGIONS', payload: data });
};

// TODO: remove this function!
export const xxx = () => { };
