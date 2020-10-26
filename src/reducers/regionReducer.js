const initialState = {
  regions: [],
  selectedName: '',
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
    const { regionName } = action.payload;

    return {
      ...state,
      selectedName: regionName,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
