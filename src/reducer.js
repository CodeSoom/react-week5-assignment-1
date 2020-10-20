const initialState = {
  regions: [],
};

const reducers = {
  setRegions: (state, payload) => {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!action) {
    return state;
  }

  const { type, payload } = action;

  return reducers[type](state, payload);
}
