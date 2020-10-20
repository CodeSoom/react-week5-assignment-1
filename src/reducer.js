const reducers = {
  setRegions: (state, payload) => {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  },
};

export default function reducer(state, action) {
  if (!action) {
    return { regions: [] };
  }

  const { type, payload } = action;

  return reducers[type](state, payload);
}
