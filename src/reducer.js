const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
};

const reducers = {
  setRegion(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategorie(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  selectRegion(state, { payload: { regionId } }) {
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
