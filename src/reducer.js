const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
};

const reducers = {
  setRegions(state, { payload }) {
    return {
      ...state,
      regions: payload.regions,
    };
  },
  setCategories(state, { payload }) {
    return {
      ...state,
      categories: payload.categories,
    };
  },
  selectRegion(state, { payload }) {
    return {
      ...state,
      selectedRegion: state.regions.find((region) => region.id === payload.regionId),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
