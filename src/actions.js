import { fetchRestaurants, fetchRestaurantsName } from './services/api';

export const setRestaurants = ({ type, info }) => ({
  type: 'setRestaurants',
  payload: {
    type,
    info,
  },
});

export const updateRestaurant = (payload) => ({
  type: 'updateRestaurant',
  payload,
});

export const loadRestaurants = (path) => async (dispatch) => {
  const response = await fetchRestaurants(path);
  dispatch(setRestaurants({ type: path, info: response }));
};

export const setRestaurantsName = (payload) => ({
  type: 'setRestaurantsName',
  payload,
});

export const loadRestaurantsName = (path) => async (dispatch) => {
  const restaurants = await fetchRestaurantsName(path);
  dispatch(setRestaurantsName(restaurants));
};
