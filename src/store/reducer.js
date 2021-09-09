const initialState = {
  regions: [],
  categories: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
};

const reducers = {
  UPDATE_FIELD: (state, action) => ({
    ...state,
    [action.payload.field]: action.payload.value,
  }),
};

const reducer = (state = initialState, action) => {
  try {
    return reducers[action.type](state, action);
  } catch (error) {
    return state;
  }
};

export default reducer;
