const initialState = {
  selectedRegionId: 0,
  regions: [],
  selectedCategoryId: 0,
  categories: [],
  restaurants: [],
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  selectRegion: (state, { id }) => ({
    ...state,
    selectedRegionId: id,
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories,
  }),
  selectCategory: (state, { id }) => ({
    ...state,
    selectedCategoryId: id,
  }),
  setRestaurants: (state, { restaurants }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action = {}) {
  if (!reducers[action.type]) {
    return state;
  }

  const { type, payload } = action;

  return reducers[type](state, payload);
}
