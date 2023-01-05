import { fetchRestaurants } from '../services/api';

const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

const loadRestaurants = (regions, categories) => async (dispatch) => {
  const regionName = regions.find((region) => region.checked)?.name;
  const categoryId = categories.find((category) => category.checked)?.id;

  if (!regionName || !categoryId) {
    return;
  }

  const restaurants = await fetchRestaurants({ regionName, categoryId });

  dispatch(setRestaurants(restaurants));
};

export {
  loadRestaurants,
};

export * from './actions/category';
export * from './actions/region';
