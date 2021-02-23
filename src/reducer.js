const initialState = {
  selectedRegionID: 0,
  selectedCategoryID: 0,
  regions: [],
  categories: [],
};

export const reducers = {
  changeSelectedRegion: (state, { payload: { id } }) => ({
    ...state,
    selectedRegionID: id,
  }),
  changeSelectedCategory: (state, { payload: { id } }) => ({
    ...state,
    selectedCategoryID: id,
  }),
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
};

export default function reducer(state = initialState, action) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
