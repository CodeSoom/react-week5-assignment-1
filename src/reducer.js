const initialState = {
  regions: [],
  categories: [],
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
  setRestaurants: (state, action) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
