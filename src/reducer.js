const initialState = {
  regions: [],
  loading: false,
};

const reducers = {
  setRegions(state, action) {
    return {
      ...state,
      regions: action.payload.regions,
    };
  },
  updateLoading(state, action) {
    return {
      ...state,
      loading: action.payload.loading,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || reducers.default)(state, action);
}
