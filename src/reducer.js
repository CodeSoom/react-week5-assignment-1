const initialState = {
  selectedRegionId: 0,
  selectedCategoryId: 0,
  regions: [],
  categories: [],
};

export const reducers = {
  changeSelectedRegion: (state, { payload: { id } }) => ({
    ...state,
    selectedRegionId: id,
  }),
  changeSelectedCategory: (state, { payload: { id } }) => ({
    ...state,
    selectedCategoryId: id,
  }),
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
