const initialState = {
  locations: [],
  location: '',
  categories: [],
  category: '',
};

const actions = {
  setLocation: (state, payload) => ({
    ...state,
    location: payload.location,
  }),
  setLocations: (state, payload) => ({
    ...state,
    locations: payload.locations,
  }),
  setCategory: (state, payload) => ({
    ...state,
    category: payload.category,
  }),
  setCategories: (state, payload) => ({
    ...state,
    categories: payload.categories,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action?.payload) {
    return state;
  }

  const { type, payload } = action;

  return actions[type](state, payload);
}
