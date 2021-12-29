const initialState = {
  categories: [],
  regions: [],
  restaurants: [],
  category: {
    id: 0,
    name: '',
  },
  region: {
    id: 0,
    name: '',
  },
};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),

  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),

  setRegion: (state, { payload: { id, name } }) => ({
    ...state,
    region: { id, name },
  }),

  setCategory: (state, { payload: { id, name } }) => ({
    ...state,
    category: { id, name },
  }),

  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
