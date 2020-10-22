const initialState = {
  regions: [],
  categories: [],
  selectedCategoryId: 0,
  selectedRegionName: '',
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  setSelectedRegionName: (state, { name }) => ({
    ...state,
    selectedRegionName: name,
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories,
  }),
  setSelectedCategory: (state, { id }) => ({
    ...state,
    selectedCategoryId: id,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}
