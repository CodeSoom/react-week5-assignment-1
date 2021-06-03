/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'restaurant',

  initialState: {
    categories: [],
    regions: [],
    restaurants: [],

    selected: {
      category: {
        id: null,
        name: null,
      },
      region: null,
    },
  },

  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setRegions: (state, action) => {
      state.regions = action.payload;
    },

    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },

    selectCategory: (state, action) => {
      state.selected.category = action.payload;
    },

    selectRegion: (state, action) => {
      state.selected.region = action.payload;
    },
  },
});

export const {
  setCategories,
  setRegions,
  setRestaurants,
  selectCategory,
  selectRegion,
} = actions;

export default reducer;
