/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'selected',

  initialState: {
    category: '',
    region: '',
  },

  reducers: {
    updateSelectedCategory: (state, action) => {
      state.category = action.payload;
    },

    updateSelectedRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const {
  updateSelectedCategory,
  updateSelectedRegion,
} = actions;

export default reducer;
