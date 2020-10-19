const reducers = {
  setRegions: (state, payload) => {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  },
};

export default function reducer(state, { type, payload }) {
  return reducers[type](state, payload);
}
