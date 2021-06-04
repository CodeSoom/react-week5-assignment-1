/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'restaurant',

  initialState: {
    categories: [],
    regions: [],
    selectedRestaurants: [],

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

    setSelectedRestaurants: (state, action) => {
      state.selectedRestaurants = action.payload;
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
  setSelectedRestaurants,

  selectCategory,
  selectRegion,
} = actions;

export default reducer;
