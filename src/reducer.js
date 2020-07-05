const initialState = {
  selected: {
    region: '',
    categoryId: '',
  },
  categories: [],
  regions: [],
  restaurants: [],
};

const reducers = {
  updateSelected(state, action) {
    return {
      ...state,
      selected: {
        ...state.selected,
        ...action.payload,
      },
    };
  },

  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
};

function defaultRecuder(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultRecuder)(state, action);
}
