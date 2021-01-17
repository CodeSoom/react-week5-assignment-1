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

export const loadRestaurantsName = () => async (dispatch, getStore) => {
  const { region, category } = getStore();

  if (!region || !category) {
    return;
  }

  const restaurants = await fetchRestaurantsName({ region, category });
  dispatch(setRestaurantsName(restaurants));
};
