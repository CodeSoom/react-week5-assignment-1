const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;

    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === regionId),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function render(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
