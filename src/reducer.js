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
  setCategories: () => ({
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
    ],
  }),
};

export default function reducer(state = initialState, action = initialAction) {
  const { type, payload } = action;

  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
}
