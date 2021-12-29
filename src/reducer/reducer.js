export const initialState = {
  locations: [],
  categories: null,
};

const reducers = {
  setLocations: (state, payload) => ({
    ...state,
    locations: payload.locations,
  }),
  setCategory: (state, payload) => ({
    ...state,
    categories: payload.categories,
  }),
};

export default function rootReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action.payload);
  }

  return state;
}
