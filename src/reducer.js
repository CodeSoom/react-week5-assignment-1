const initialState = {
  regionData: [],
  categoryData: [],
  restaurantData: [],
  selectedData: { selectedRegion: {}, selectedCategory: {} },
};

const handleAction = {
  SET_REGION_DATA: (state, { payload: { regionData } }) => ({
    ...state,
    regionData,
  }),
  SET_CATEGORY_DATA: (state, { payload: { categoryData } }) => ({
    ...state,
    categoryData,
  }),
  SET_RESTAURANT_DATA: (state, { payload: { restaurantData } }) => ({
    ...state,
    restaurantData,
  }),
  UPDATE_SELECTED_DATA: (state, { payload: { selectedRegion, selectedCategory } }) => ({
    ...state,
    selectedData: {
      ...state.selectedData,
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
