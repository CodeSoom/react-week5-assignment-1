export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  regionName: '',
  categoryId: -1,
};

const reducers = {
  setRegion: (state, action) => ({
    ...state,
    regionName: action.payload.regionName,
  }),
  setCategory: (state, action) => ({
    ...state,
    categoryId: action.payload.categoryId,
  }),
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

export function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
