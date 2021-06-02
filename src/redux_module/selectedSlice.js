/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'selected',

  initialState: {
    category: '',
    region: '',
    restaurants: [],
  },

  reducers: {
    selectCategory: (state, action) => {
      state.category = action.payload;
    },

    selectRegion: (state, action) => {
      state.region = action.payload;
    },

    updateRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const {
  selectCategory,
  selectRegion,
  updateRestaurants,
} = actions;

export default reducer;
