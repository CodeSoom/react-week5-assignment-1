const initialState = {
  regions: [],
  selectedRegion: null,
  categories: [],
  selectedCategory: null,
  restaurants: [],
};

const reducers = {
  setRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),

  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),

  selectRegion: (state, action) => {
    const selectedRegion = state.regions.find((region) => region.id === action.payload.regionId);

    return {
      ...state,
      selectedRegion,
    };
  },
};

export default function reducer(previousState = initialState, action) {
  if (!action || !reducers[action.type]) {
    return previousState;
  }

  return reducers[action.type](previousState, action);
}
