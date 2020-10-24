import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export const intializeSelectButtons = ({ regions, categories }) => ({
  type: 'intializeSelectButtons',
  payload: { regions, categories },
});

export const setSelectedButton = ({ type, value }) => ({
  type: 'setSelectedButton',
  payload: { type, value },
});

export const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: restaurants,
});

export const intializeSelectButtonsAsync = () => async (dispatch) => {
  const regions = await fetchRegions();
  const categories = await fetchCategories();

  dispatch(intializeSelectButtons({ regions, categories }));
};

export const setRestaurantsAsync = () => async (dispatch, getState) => {
  const { selectedButtons: { region, category } } = getState();

  const restaurants = await fetchRestaurants({ region, category });

  dispatch(setRestaurants(restaurants));
};
