export const initialState = {
  regions: [],
  categories: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
};

const cases = {
  SET_REGIONS: (state, action) => ({
    ...state,
    regions: action.payload,
  }),
  SET_CATEGORIES: (state, action) => ({
    ...state,
    categories: action.payload,
  }),
  SET_SELECTED_REGION: (state, action) => ({
    ...state,
    selectedRegion: action.payload,
  }),
  SET_SELECTED_CATEGORY: (state, action) => ({
    ...state,
    selectedCategory: action.payload,
  }),
  SET_RESTAURANTS: (state, action) => ({
    ...state,
    restaurants: action.payload,
  }),
};

export default function reducer(state = initialState, action) {
  const handler = cases[action.type];

  return handler ? handler(state, action) : state;
}
