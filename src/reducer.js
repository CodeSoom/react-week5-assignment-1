const initialState = {
  regions: [],
  categories: [],
  selectRegion: '',
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
  selectedRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectRegion: regions.find((region) => region.id === regionId),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
