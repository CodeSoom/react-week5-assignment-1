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
  setRestaurants: () => ({
    restaurants: [
      { id: 1, name: '양천주가' },
      { id: 6, name: '한국식 초밥' },
      { id: 14, name: '김초밥' },
    ],
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
