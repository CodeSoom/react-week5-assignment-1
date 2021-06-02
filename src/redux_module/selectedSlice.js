/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'selected',

  initialState: {
    category: '',
    region: '',
  },

  reducers: {
    selectCategory: (state, action) => {
      state.category = action.payload;
    },

    selectRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const {
  selectCategory,
  selectRegion,
} = actions;

export default reducer;
