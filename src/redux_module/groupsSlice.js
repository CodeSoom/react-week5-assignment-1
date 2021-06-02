/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'groups',

  initialState: {
    categories: [],
    regions: [],
  },

  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },

    setRegions: (state, action) => {
      state.regions = action.payload;
    },
  },
});

export const {
  setCategories,
  setRegions,
} = actions;

export default reducer;
