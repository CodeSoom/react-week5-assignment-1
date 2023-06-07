const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegionAndCategory: { selectedRegion: {}, selectedCategory: {} },
};

const handleAction = {
  SET_REGIONS: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  SET_CATEGORIES: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
  SET_RESTAURANTS: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
  SET_SELECTED_REGION_AND_CATEGORY: (state, { payload: { selectedRegion, selectedCategory } }) => ({
    ...state,
    selectedRegionAndCategory: {
      ...state.selectedRegionAndCategory,
      selectedRegion,
      selectedCategory,
    },
  }),
};

export default function reducer(state = initialState, action) {
  if (handleAction[action.type]) {
    return handleAction[action.type](state, action);
  }
  return state;
}
