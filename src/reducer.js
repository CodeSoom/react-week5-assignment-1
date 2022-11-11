const initialState = {
  resions: [],
  restaurants: [],
  categories: [],
};

const actionCreators = {
  setRegions: (state, action) => {
    const { resions } = action.payload;

    return {
      ...state,
      resions,
    };
  },

  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },

  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },
};

export default function reducer(state = initialState, action) {
  return !action || !actionCreators[action.type]
    ? state
    : actionCreators[action.type](state, action);
}
