const initialState = {
  isLoading: {
    regions: true,
    categories: true,
    restaurants: false,
  },
  regions: [],
  categories: [],
  restaurants: [],
  region: '',
  category: '',
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

  getRestaurants: (state, action) => ({
    ...state,
    isLoading: {
      ...state.isLoading,
      restaurants: false,
    },
    restaurants: action.payload.restaurants,
  }),

  setRegion: (state, action) => ({
    ...state,
    region: action.payload.region,
  }),

  setCategory: (state, action) => ({
    ...state,
    category: action.payload.category,
  }),

};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
