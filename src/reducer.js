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
  categoryId: '',
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

  setStartLoading: (state, action) => ({
    ...state,
    isLoading: {
      ...state.isLoading,
      [action.payload.target]: true,
    },
  }),

  setRegion: (state, action) => ({
    ...state,
    region: action.payload.region,
  }),

  setCategoryId: (state, action) => ({
    ...state,
    categoryId: action.payload.categoryId,
  }),

};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
