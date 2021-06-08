const initialState = {
  newId: 100,
  regions: [],
  categories: [],
  selectedRegion: { id: 0, name: '' },
  selectedCategory: { id: 0, name: '' },
  restaurants: [],
};

const defaultAction = {
  type: '',
};

const reducers = {
  setRegions: ({ state, action }) => ({
    ...state,
    regions: action.payload.regions,
  }),

  setCategories: ({ state, action }) => ({
    ...state,
    categories: action.payload.categories,
  }),

  selecteRegion: ({ state, action }) => ({
    ...state,
    selectedRegion: action.payload.region,
  }),

  selecteCategory: ({ state, action }) => ({
    ...state,
    selectedCategory: action.payload.category,
  }),

  getRestaurants: ({ state, action }) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),
};

export default function reducer(state = initialState, action = defaultAction) {
  return reducers[action.type]
    ? reducers[action.type]({ state, action })
    : state;
}
