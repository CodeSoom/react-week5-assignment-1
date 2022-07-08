const initialState = {
  isLoading: {
    regions: true,
    categories: true,
  },
  regions: [],
  categories: [],
  region: '',
};

const reducerAction = {
  getRegions: (state, action) => ({
    ...state,
    isLoading: {
      ...state.isLoading,
      regions: false,
    },
    regions: action.payload.regions,
  }),

  getCategories: (state, action) => ({
    ...state,
    isLoading: {
      ...state.isLoading,
      categories: false,
    },
    categories: action.payload.categories,
  }),

  setRegion: (state, action) => ({
    ...state,
    region: action.payload.region,
  }),

};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
