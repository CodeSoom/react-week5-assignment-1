import { setCategories, setRegions, setRestaurants } from './actions';
import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const searchRestaurants = ({
  region,
  category,
}) => async (dispatch) => {
  const restaurants = await fetchRestaurants({ region, category });
  dispatch(setRestaurants(restaurants));
};
