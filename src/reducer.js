const inistialState = {
  regions: [],
  region: null,
  categories: [],
  category: null,
  restaurants: [],
};

const defaultReducer = (state) => state;

const reducers = {
  changeRegion(state, { payload: { region } }) {
    return {
      ...state,
      region,
    };
  },
  changeCategory(state, { payload: { category } }) {
    return {
      ...state,
      category,
    };
  },
  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },
  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
};

export default function reducer(state = inistialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
