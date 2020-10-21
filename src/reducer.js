const initialState = {
  regions: [],
  categories: [],
  selectedCategory: '',
  selectedRegion: '',
  restaurants: [],
};

const initialAction = {
  type: 'initialAction',
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories,
  }),
  selectCategory: (state, payload) => ({
    ...state,
    selectedCategory: payload.id,
  }),
  selectRegion: (state, payload) => ({
    ...state,
    selectedRegion: payload.name,
  }),
};

export default function reducer(state = initialState, action = initialAction) {
  const { type, payload } = action;

  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
}
