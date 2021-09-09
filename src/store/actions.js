import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

export const updateField = ({ field, value }) => ({
  type: 'UPDATE_FIELD',
  payload: { field, value },
});

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(updateField({ field: 'categories', value: categories }));
};

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(updateField({ field: 'regions', value: regions }));
};

export const loadRestaurants = ({ regionName, categoryId }) => async (dispatch) => {
  const restaurants = await fetchRestaurants({ regionName, categoryId });
  dispatch(updateField({ field: 'restaurants', value: restaurants }));
};
