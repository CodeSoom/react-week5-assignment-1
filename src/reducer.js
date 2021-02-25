const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  clicked: {
    region: '',
    category: '',
  },
};

const reducers = {
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions: { ...state.regions, ...regions },
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories: { ...state.categories, ...categories },
  }),
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants: { ...state.restaurants, ...restaurants },
  }),
  setClicked: (state, { payload: { clicked } }) => ({
    ...state,
    clicked: {
      region: { ...state.clicked.region, ...clicked.region },
      category: { ...state.clicked.category, ...clicked.category },
    },
  }),
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
