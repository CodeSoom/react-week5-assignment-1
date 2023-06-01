const initialState = { regionData: [], categoryData: [], selectedData: {} };

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
    console.log('22', categoryData);
    return {
      ...state,
      categoryData,
    };
  },
  UPDATE_SELECTED_DATA: (state, action) => {
    const { selectedRegion, selectedCategory } = action.payload;
    console.log(action.payload);
    console.log('selectedRegion', selectedRegion);
    console.log('selectedCategory', selectedCategory);
    console.log('state', state);
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

export default function store(state = initialState, action) {
  if (handleAction[action.type]) {
    console.log(action.type);
    return handleAction[action.type](state, action);
  }
  return state;
}
