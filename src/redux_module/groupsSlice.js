/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'groups',

  initialState: {
    categories: ['한식', '중식', '일식', '양식', '분식'],
    regions: ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'],
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
