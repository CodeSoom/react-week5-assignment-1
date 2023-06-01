const initialState = { regionData: [], selectedData: {} };

const handleAction = {
  SET_REGION_DATA: (state, action) => {
    const { regionData } = action.payload;
    return {
      ...state,
      regionData,
    };
  },
  UPDATE_SELECTED_DATA: (state, action) => {
    const { selectedRegion, selectedCategory } = action.payload;
    return {
      ...state,
      selectedData: {
        ...state.selectedData,
        selectedRegion,
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
