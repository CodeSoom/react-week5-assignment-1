const initialState = {
  regions: [],
};

const reducers = {
  setRegions(state, action) {
    return {
      ...state,
      regions: action.payload.regions,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || reducers.default)(state, action);
}
