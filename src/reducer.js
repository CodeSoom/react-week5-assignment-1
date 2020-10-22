const initialState = {
  regions: [],
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    return {
      categories:
        [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
        ],
    };
  }

  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}
