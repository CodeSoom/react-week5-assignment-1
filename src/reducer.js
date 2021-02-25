const initialState = {
  selectedRegion: null,
  selectedCategory: null,
  regions: [],
  categories: [],
  restaurants: [],
};

export const reducers = {
  changeSelectedRegion: (state, { payload: { region } }) => ({
    ...state,
    selectedRegion: region,
  }),
  changeSelectedCategory: (state, { payload: { category } }) => ({
    ...state,
    selectedCategory: category,
  }),
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  return reducers[action?.type] ? reducers[action.type](state, action) : state;
}
