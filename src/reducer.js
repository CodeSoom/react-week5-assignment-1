const initialState = {
  regionData: [], categoryData: [], restaurantData: [], selectedData: {},
};

const handleAction = {
  SET_REGION_DATA: (state, action) => {
    const { regionData } = action.payload;
    return {
      ...state,
      regionData,
    };
  },
  SET_CATEGORY_DATA: (state, action) => {
    const { categoryData } = action.payload;

    return {
      ...state,
      categoryData,
    };
  },
  SET_RESTAURANT_DATA: (state, action) => {
    const { restaurantData } = action.payload;
    return {
      ...state,
      restaurantData,
    };
  },
  UPDATE_SELECTED_DATA: (state, action) => {
    const { selectedRegion, selectedCategory } = action.payload;
    return {
      ...state,
      selectedData: {
        ...state.selectedData,
        selectedRegion,
        selectedCategory,
      },
    };
  },
};

export default function reducer(state = initialState, action) {
  if (handleAction[action.type]) {
    return handleAction[action.type](state, action);
  }
  return state;
}
