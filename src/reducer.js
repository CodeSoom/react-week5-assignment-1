const initialState = {
  regions: [],
  selectedRegion: '',
  categories: [],
  selectedCategory: '',
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
};

export default function reducer(previousState = initialState, action) {
  if (!action || !reducers[action.type]) {
    return previousState;
  }

  return reducers[action.type](previousState, action);
}
