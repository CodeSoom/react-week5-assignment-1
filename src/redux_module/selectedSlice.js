/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const selectedSlice = createSlice({
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

export const { updateSelectedCategory, updateSelectedRegion } = selectedSlice.actions;

export default selectedSlice.reducer;
