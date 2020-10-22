import { fetchRestaurants } from './services/api';

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

export const loadRestaurantsName = (payload) => ({
  type: 'loadRestaurantsName',
  payload,
});
