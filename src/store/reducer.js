import { createSlice } from '@reduxjs/toolkit';

import { fetchCategories, fetchRegions, fetchRestaurants } from '../services/api';

const initialState = {
  regions: [],
  categories: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
};

const slice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    updateField(state, action) {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    },
  },
});

export const { updateField } = slice.actions;

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

export default slice.reducer;
