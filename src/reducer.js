const initialState = {
  regions: [],
  loading: false,
};

const reducers = {
  setRegions(state, action) {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },
  updateLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      loading,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
