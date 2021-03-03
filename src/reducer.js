const initialState = {
  locations: [],
  categories: [],
  restaurants: [],
  selectedLocation: { id: '', name: '' },
  selectedCategory: { id: '', name: '' },
};

export const reducers = {
  updateSelectedLocation: (state, { payload: { location } }) => ({
    ...state,
    selectedLocation: location,
  }),
  updateSelectedCategory: (state, { payload: { category } }) => ({
    ...state,
    selectedCategory: category,
  }),
  setLocations: (state, { payload: { locations } }) => ({
    ...state,
    locations,
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
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
