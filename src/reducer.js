const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegionAndCategory: { selectedRegion: {}, selectedCategory: {} },
};

const handleAction = {
  SET_REGIONS: (state, action) => {
    const { regions } = action.payload;
    return ({
      ...state,
      regions,
    });
  },
  SET_CATEGORIES: (state, action) => {
    const { categories } = action.payload;
    return ({
      ...state,
      categories,
    });
  },

  SET_RESTAURANTS: (state, action) => {
    const { restaurants } = action.payload;
    return ({
      ...state,
      restaurants,
    });
  },

  SET_SELECTED_REGION_AND_CATEGORY: (state, action) => {
    const { selectedRegion, selectedCategory } = action.payload.selectedRegionAndCategory;
    return ({
      ...state,
      selectedRegionAndCategory: {
        ...state.selectedRegionAndCategory,
        selectedRegion,
        selectedCategory,
      },
    });
  },
};

export default function reducer(state = initialState, action) {
  if (handleAction[action.type]) {
    return handleAction[action.type](state, action);
  }
  return state;
}
