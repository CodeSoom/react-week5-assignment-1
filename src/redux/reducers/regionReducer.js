const initialState = {
  regions: [],
  selectedId: null,
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
  updateRegionsLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      loading,
    };
  },
  selectRegion(state, action) {
    const { regionId } = action.payload;

    return {
      ...state,
      selectedId: regionId,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
