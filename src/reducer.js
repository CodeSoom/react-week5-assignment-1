const initialState = {
  regions: [],
  categories: [],
};

const initialAction = {
  type: 'initialAction',
};

const reducers = {
  setRegions: (state, payload) => {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  },

  setCategories: (state, payload) => {
    const { categories } = payload;
    return {
      ...state,
      categories,
    };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  const { type, payload } = action;

  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
}
